const router = require('express').Router();
const Embed = require('../../utility/embed');
const DiscordUtil = require('../discord-handler');

const messages = [
  `LET'S GOOOOOOO`,
  `LET'S FUCKING GOOOOO`,
  `GET YOUR LAZY ASS UP`,
  `🔥🔥🔥🔥🔥🔥👈🚶`
];

const GUILD_ID = process.env.GUILD_ID;
const CHANNEL_ID = process.env.CHANNEL_ID;

router.post('/walk', async (req, res) => {
  try {
    const name = messages[Math.floor(Math.random() * messages.length)];
    const imageUrl = 'https://i.kym-cdn.com/photos/images/newsfeed/001/852/171/895';
    const cardEmbed = new Embed(name, '#ffffff', null, imageUrl);
    await DiscordUtil.sendMessage(GUILD_ID, CHANNEL_ID, cardEmbed.embed);
    res.status(200).send('Sent Discord Message.');
  }
  catch (error) {
    console.error('notifications.js@:', error.message);
    res.status(400).send(error.message);
  }
});

module.exports = router;
