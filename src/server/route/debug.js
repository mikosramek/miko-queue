const router = require('express').Router();
const auth = require('../util/soft-auth');

router.post('/debug/env', async (req, res) => {
  try {
    const { u, p } = req.body;
    if (auth.checkAuth(u, p)) {
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
        ...data
      } = process.env;
      res.status(200).send(data);
    }
    else {
      res.status(401).send();
    }
  }
  catch (error) {
    console.error('proxy.js@:', error.message);
    res.status(400).send(error.message);
  }
});

module.exports = router;
