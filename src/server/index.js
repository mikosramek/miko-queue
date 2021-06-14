if(process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const IS_DEV = process.env.DEV || false;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const notifications = require('./route/notifications');
const proxy = require('./route/proxy');
const imageRouter = require('./route/imagesRouter');
const debug = require('./route/debug');

const PORT = process.env.PORT || 3000;

const serverInit = () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.urlencoded({extended:true}));

  app.use('/notifications/', notifications);
  app.use('/proxy/', proxy);
  app.use('/image/', imageRouter);
  app.use(debug);

  app.use('/', (req, res) => {
    res.status(404).send('No endpoint here!');
  });

  app.listen(PORT, () => {
    console.log(`Express server running on port: ${PORT}`)
  });
};

serverInit();

module.exports = serverInit;
