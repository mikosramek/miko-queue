const router = require('express').Router();
const Embed = require('../../utility/embed');
const DiscordUtil = require('../discord-handler');

const messages = require('../data/walk-messages');

const GUILD_ID = process.env.GUILD_ID;
const CHANNEL_ID = process.env.CHANNEL_ID;

router.post('/walk', async (req, res) => {
  try {
    const message = messages[Math.floor(Math.random() * messages.length)];
    const name = message.text;
    const imageUrl = message.image;
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
