const router = require('express').Router();
const auth = require('../util/soft-auth');
const commander = require('../../commandController');
const webhooks = require('./webhooks');

router.use('/webhooks', webhooks);

router.use('', (req, res, next) => {
  try {
    // const { u, p } = req.body;
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [ login, password ] = Buffer.from(b64auth, 'base64').toString().split(':');
    if (auth.checkAuth(login, password)) {
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

// router.post('/simulate/command', async (req, res) => {
//   try {
//     const { command } = req.body;
//     console.info({ command }, 'debug.js@');
//     const content = command.split(/ +/);
//     await commander.parseCommand(command, content[0], content.slice(1));
//     res.status(204).send();
//   }
//   catch (error) {
//     console.error('debug.js@:', error.message);
//     res.status(500).send({ error });
//   }
// });

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
