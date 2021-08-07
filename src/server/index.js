if(process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const IS_DEV = process.env.DEV || false;

const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require("express-rate-limit");
const cors = require('cors');

const notifications = require('./route/notifications');
const proxy = require('./route/proxy');
const imageRouter = require('./route/imagesRouter');
const debug = require('./route/debug');
const scheduler = require('./route/scheduler');

const PORT = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

const serverInit = () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json({extended: true}));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(limiter);

  app.use('/notifications/', notifications);
  app.use('/proxy/', proxy);
  app.use('/image/', imageRouter);
  app.use('/debug', debug); // contains webhooks
  app.use('/schedule', scheduler);

  app.use('/', (req, res) => {
    res.status(404).send('No endpoint here!');
  });

  app.listen(PORT, () => {
    console.log(`Express server running on port: ${PORT}`)
  });
};

serverInit();

module.exports = serverInit;
