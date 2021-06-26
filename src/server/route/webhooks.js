const router = require('express').Router();
const bodyParser = require('body-parser');
const _get = require('lodash.get');
const Embed = require('../../utility/embed');
const DiscordUtil = require('../util/discord-handler');

const GUILD_ID = process.env.GUILD_ID;
const CHANNEL_ID = process.env.DEBUG_CHANNEL_ID;

let sentPendingNotif = false;
let sentSuccessNotif = false;
let sendOtherNotif = false;

const customParser = bodyParser.json({type: function(req) {
    if (req.headers['content-type'] === ""){
        return req.headers['content-type'] = 'application/json';
    }
    else if (typeof req.headers['content-type'] === 'undefined'){
        return req.headers['content-type'] = 'application/json';
    }else{
        return req.headers['content-type'] = 'application/json';
    }
}});

router.post('/heroku', customParser, async (req, res) => {
  try {
    // console.log(rest);
    // console.info({ data }, 'webhooks.js@');
    // console.log(req);

    // app.name
    // status
    // release.version
    // slug.commit
    // slug.commit_description

    const data = _get(req, 'body.data', {});
    console.info(req.body, 'webhooks.js@');
    console.info(data);
    const name = _get(data, 'app.name', '-');
    const status = _get(data, 'status', 'webhook error');
    const output = _get(data, 'output_stream_url', '-');
    const release = _get(data, 'release.version', null);
    const commit = _get(data, 'slug.commit', '-');
    const commitDesc = _get(data, 'slug.commit_description', '-');

    console.info({ name, status, release, commit, commitDesc }, 'webhooks.js@');

    if (status === 'succeeded' && !sentSuccessNotif) {
      sentSuccessNotif = true;
      const cardEmbed = new Embed(`${name} update`, '#ffffff', output, null);
      cardEmbed.addField('Status:', status);
      cardEmbed.addField('Version:', release, true);
      cardEmbed.addField('Commit Hash:', commit, true);
      cardEmbed.addField('Update:', commitDesc || '-');
      await DiscordUtil.sendMessage(GUILD_ID, CHANNEL_ID, cardEmbed.embed);
    }
    else if (status === 'pending' && !sentPendingNotif) {
      sentPendingNotif = true;
      const cardEmbed = new Embed(`${name} update`, '#ffffff', output, null);
      cardEmbed.addField('Status:', status);
      await DiscordUtil.sendMessage(GUILD_ID, CHANNEL_ID, cardEmbed.embed);
    }
    else if (!sendOtherNotif) {
      sendOtherNotif = true;
    }

    res.status(204).send();
  }
  catch (error) {
    console.error('webhooks.js@:', error.message);
    res.status(400).send(error.message);
  }
});

module.exports = router;
