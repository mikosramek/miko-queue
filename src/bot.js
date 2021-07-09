'use strict'
if(process.env.NODE_ENV !== 'production') { require('dotenv').config() }
const config = require('../config.json');

const Discord = require('discord.js');
const client = new Discord.Client();

const commander = require('./commandController');
const controller = new commander.Controller(config);

const IS_DEV = process.env.DEV || false;

client.once('ready', () => {
    console.log('Bot up and running!');
});

client.on('message', async (message) => {
  if (message.author.bot) return;


  const content = message.content.split(/ +/);
  // const sender = message.author.username;
  const channel = message.channel;
  try {
    const response = await controller.parseCommand(message, content[0], content.slice(1));
    if (response) {
      await channel.send(response);
    }
  } catch(e) {
    if (e) { await channel.send(e); }
  }
});

client.on('messageReactionAdd', (messageReactionObject, user) => {
  // console.log(messageReactionObject);
  try {
    const { message, _emoji } = messageReactionObject;
    const { content } = message;
    console.log(_emoji);
    const { id, name } = _emoji;
    message.edit(`${content} <:${name}:${id}>`);
  }
  catch (error) {
    console.error('bot.js@:', error.message);
  }
});

client.login(process.env.BOT_TOKEN);
