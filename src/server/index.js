if(process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const IS_DEV = process.env.DEV || false;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const notifications = require('./route/notifications');

const PORT = process.env.PORT || 3000;

const serverInit = () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.urlencoded({extended:true}));

  app.use('/notifications/', notifications);

  app.use('/', (req, res) => {
    res.status(404).send('No endpoint here!');
  });

  app.listen(PORT, () => {
    console.log(`Express server running on port: ${PORT}`)
  });
};

if (!IS_DEV) {
  serverInit();
}

module.exports = serverInit;
