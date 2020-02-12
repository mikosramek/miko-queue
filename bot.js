'use strict'
// const dotenv = require('dotenv');
// dotenv.config();
const config = require('./config.json');

const Discord = require('discord.js');
const client = new Discord.Client();

const commander = require('./commandController');
const controller = new commander.Controller(config);

client.once('ready', () => {
    console.log('Bot up and running!');
});

client.on('message', async (message) => {
  const content = message.content.split(' ');
  const sender = message.author.username;
  const channel = message.channel;
  try {
    const response = await controller.parseCommand(content[0], content.slice(1));
    channel.send(response);
  }catch(e){
    if(e) { channel.send(e); }
  }
  // channel.send
});

client.login(process.env.BOT_TOKEN);