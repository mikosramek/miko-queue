const router = require('express').Router();
const axios = require('axios');
const db = require('../../../utility/mongodb/db');
const matchResults = require('./dummyPVP');
const { createPVPStatsCanvas } = require('./util/canvas');

router.get('/pvp/:id', async (req, res) => {
  try {
    // const { id } = req.params;
    // const key = await db.queryDB(id);
    // //
    // const url =  `https://api.guildwars2.com/v2/pvp/games?access_token=${key}`;
    // const listOfMatches = (await axios.get(url)).data;
    // console.info(listOfMatches, 'gw2.js@');
    //
    // const ids = listOfMatches.reduce((currentID, list) => list + `, ${currentID}`, '');
    //
    // console.info({ ids }, 'gw2.js@');
    //
    // const matchResults = (await axios.get(
    //   `${url}&ids=${ids.slice(0, ids.length - 2)}`
    // )).data;

    // const accountData = (await axios.get(`https://api.guildwars2.com/v2/account?access_token=${key}`)).data;
    // const { name } = accountData;

    const name = 'TMG.1307'

    const canvas = createPVPStatsCanvas({
      name,
      matchResults
    });

    res.setHeader('Content-Type', 'image/jpg');
    canvas.createJPEGStream({ quality : 0.9 }).pipe(res);

    // res
    //   .status(200)
    //   .send(
    //     {
    //       success : true,
    //       matchResults,
    //       name
    //     }
    //   );

  }
  catch (error) {
    console.error('gw2.js@:', error.message);
    res.status(400).send(error);
  }
});

module.exports = router;
