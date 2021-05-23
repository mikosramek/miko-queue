const router = require('express').Router();
const eventBus = require('../../utility/EventBus');
const Embed = require('../../utility/embed');

const messages = [
  `LET'S GOOOOOOO`,
  `LET'S FUCKING GOOOOO`,
  `GET YOUR LAZY ASS UP`
];

router.post('/walk', (req, res) => {
  try {
    const name = messages[Math.floor(Math.random() * messages.length)];
    const imageUrl = 'https://i.kym-cdn.com/photos/images/newsfeed/001/852/171/895';
    const cardEmbed = new Embed(name, '#ffffff', null, imageUrl);
    eventBus.$emit('send-message', cardEmbed.embed);
    res.status(200).send('Sent Discord Message.');
  }
  catch (error) {
    console.error('notifications.js@:', error.message);
    res.status(400).send(error.message);
  }
});

module.exports = router;
