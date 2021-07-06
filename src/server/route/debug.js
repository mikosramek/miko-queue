const router = require('express').Router();
const auth = require('../util/soft-auth');

const webhooks = require('./webhooks');

router.use('/webhooks', webhooks);

router.use('', (req, res, next) => {
  try {
    const { u, p } = req.body;
    if (auth.checkAuth(u, p)) {
      next();
    }
    else {
      res.status(401).send();
    }
  }
  catch (error) {
    console.error('debug.js@:', error.message);
    res.status(400).send(error.message);
  }
});

router.post('/env', async (req, res) => {
  try {
    const  {
      API_USER,
      API_PW,
      MONGO_DB_PW,
      MONGO_DB_USER,
      BOT_TOKEN,
      STACK_APPS_TOKEN,
      ADMIN,
      CHANNEL_ID,
      GUILD_ID,
      NOTION_TOKEN,
      MONGO_DB_URL,
      DATABASE_URL,
      ...data
    } = process.env;
    res.status(200).send(data);
  }
  catch (error) {
    console.error('proxy.js@:', error.message);
    res.status(400).send(error.message);
  }
});

module.exports = router;
