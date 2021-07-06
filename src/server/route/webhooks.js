const router = require('express').Router();
const bodyParser = require('body-parser');
const _get = require('lodash.get');
const Embed = require('../../utility/embed');
const  { getBranchDetails } = require('../util/github-api');
const DiscordUtil = require('../util/discord-handler');

const GUILD_ID = process.env.GUILD_ID;
const CHANNEL_ID = process.env.DEBUG_CHANNEL_ID;

const REPO = process.env.REPO_NAME;
const ORG = process.env.ORG_NAME;
const BRANCH = process.env.BRANCH_NAME;

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

router.get('/branch-details', async (req, res) => {
  const data = await getBranchDetails(ORG, REPO, BRANCH);
  res.status(200).send(data);
})

router.post('/heroku', customParser, async (req, res) => {
  try {
    const data = _get(req, 'body.data', {});
    const name = _get(data, 'app.name', '-');
    const status = _get(data, 'status', 'webhook error');
    const output = _get(data, 'output_stream_url', null);
    const release = _get(data, 'release.version', null);
    const userEmail = _get(data, 'user.email', '-');

    const { authorName, message, commitUrl, sha } = await getBranchDetails(ORG, REPO, BRANCH);

    if (status === 'succeeded' && !sentSuccessNotif) {
      sentSuccessNotif = true;
      const cardEmbed = new Embed(`${name} update`, '#ffffff', output, null);
      cardEmbed.addField('Status:', status, true);
      cardEmbed.addField('Version:', release, true);
      cardEmbed.addField('Commit Hash:', sha);
      await DiscordUtil.sendMessage(GUILD_ID, CHANNEL_ID, cardEmbed.embed);
    }
    else if (status === 'pending' && !sentPendingNotif) {
      sentPendingNotif = true;
      const cardEmbed = new Embed(`${name} update`, '#ffffff', commitUrl, null);
      cardEmbed.addField('Status:', status);
      cardEmbed.addField('Triggered by:', `${authorName}:${userEmail}`);
      cardEmbed.addField('Update:', message);
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
