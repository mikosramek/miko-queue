const router = require('express').Router();
const Embed = require('../../utility/embed');
const DiscordUtil = require('../util/discord-handler');

const GUILD_ID = process.env.GUILD_ID;
const CHANNEL_ID = process.env.DEBUG_CHANNEL_ID;

router.post('/heroku', async (req, res) => {
  try {
    const { app, head, git_log } = req.body;
    const cardEmbed = new Embed(`${app} update`, '#ffffff', null, null);
    cardEmbed.addField('Commit:', head);
    cardEmbed.addField('Update:', git_log);
    await DiscordUtil.sendMessage(GUILD_ID, CHANNEL_ID, cardEmbed.embed);
    res.status(200).send();
  }
  catch (error) {
    console.error('webhooks.js@:', error.message);
    res.status(400).send(error.message);
  }
});

module.exports = router;
