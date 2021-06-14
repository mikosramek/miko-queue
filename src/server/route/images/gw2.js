const router = require('express').Router();
const axios = require('axios');
const dayjs = require('dayjs');
const db = require('../../../utility/mongodb/db');
// const { matchResults, seasons, currentSeason : tempCurrentSeason, professions : tempProfs } = require('./dummyPVP');
const { createPVPStatsCanvas } = require('./util/canvas');

const Cache = require('../../Cache');
const KEYS = require('../../util/cache-keys');

router.get('/pvp/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const key = await db.queryDB(id);

    const gamesURL = `https://api.guildwars2.com/v2/pvp/games?access_token=${key}`;
    const listOfMatches = (await axios.get(gamesURL)).data;

    const ids = listOfMatches.reduce((currentID, list) => list + `, ${currentID}`, '');

    const matchResults = (await axios.get(
      `${gamesURL}&ids=${ids.slice(0, ids.length - 2)}`
    )).data;

    const accountData = (await axios.get(`https://api.guildwars2.com/v2/account?access_token=${key}`)).data;
    const { name } = accountData;

    let seasonID = 'ERROR';
    let latestTime = null;
    matchResults.forEach(({ ended, season}) => {
      if (latestTime) {
        const matchEnd = dayjs(ended);
        if (matchEnd.isAfter(latestTime)) {
          latestTime = ended;
          seasonID = season;
        }
      }
      if (!latestTime) {
        latestTime = dayjs(ended);
        seasonID = season;
      }
    });

    let currentSeason = Cache.get(`${KEYS.gw2_season}${seasonID}`);
    if (currentSeason === undefined) {
      // axios call to get season data
      currentSeason = (await axios.get(`https://api.guildwars2.com/v2/pvp/seasons/${seasonID}`)).data;
      Cache.addToCache(`${KEYS.gw2_season}${seasonID}`, currentSeason);
    }


    const adjustedMatches = matchResults
      .filter(({ season }) => {
        return season === seasonID;
      })
      .sort((matchA, matchB) => {
        if (dayjs(matchA.ended).isAfter(dayjs(matchB.ended))) {
          return 1;
        }
        else if (dayjs(matchA.ended).isBefore(dayjs(matchB.ended)))  {
          return -1;
        }
        else {
          return 0;
        }
      });

    // Use the set to create the api query
    // Maybe check the cache to see if the profession exists before adding
    let professions = Cache.get(KEYS.gw2_professions);
    if (professions === undefined) {
      const professionSet = new Set();
      adjustedMatches.forEach(({ profession }) => professionSet.add(profession));
      // https://api.guildwars2.com/v2/professions?ids=Necromancer,Engineer
      const professionData = (await axios.get(`https://api.guildwars2.com/v2/professions?ids=${[...professionSet].join(',')}`)).data;
      professions = professionData;
      Cache.addToCache(KEYS.gw2_professions, professionData);
    }

    const profIcons = {};
    for (let i = 0; i < professions.length; i += 1) {
      const { icon, name } = professions[i];
      profIcons[name] = icon;
    }

    const seasons = (await axios.get(`https://api.guildwars2.com/v2/pvp/standings?access_token=${key}`)).data;
    const currentMatchData = seasons.find(({ season_id }) => season_id === seasonID);
    const rating = currentMatchData.current.rating;

    const canvas = await createPVPStatsCanvas({
      name,
      rating,
      matchResults : adjustedMatches,
      heading : currentSeason.name,
      profIcons
    });

    res.setHeader('Content-Type', 'image/jpg');
    canvas.createJPEGStream({ quality : 1 }).pipe(res);
    // canvas.createPNGStream({ resolution : 2 }).pipe(res);
  }
  catch (error) {
    console.error('gw2.js@:', error.message);
    res.status(400).send(error);
  }
});

module.exports = router;
