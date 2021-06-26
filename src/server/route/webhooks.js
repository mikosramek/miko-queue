const router = require('express').Router();
const Embed = require('../../utility/embed');
const DiscordUtil = require('../util/discord-handler');

const GUILD_ID = process.env.GUILD_ID;
const CHANNEL_ID = process.env.DEBUG_CHANNEL_ID;

router.post('/heroku', async (req, res) => {
  try {
    const payload = req.body;

    console.log(req);
    console.log('***** PAYLOAD ****');
    console.log(payload);
    // console.log(rest);
    // console.info({ data }, 'webhooks.js@');
    // console.log(req);

    // app.name
    // status
    // release.version
    // slug.commit
    // slug.commit_description

    // const { app } = payload.data;

    // const cardEmbed = new Embed(`${app} update`, '#ffffff', null, null);
    // cardEmbed.addField('Commit:', head);
    // cardEmbed.addField('Update:', git_log);
    // await DiscordUtil.sendMessage(GUILD_ID, CHANNEL_ID, app.name);
    res.status(204).send();
  }
  catch (error) {
    console.error('webhooks.js@:', error.message);
    res.status(400).send(error.message);
  }
});

module.exports = router;
