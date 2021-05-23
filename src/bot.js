'use strict'
if(process.env.NODE_ENV !== 'production') { require('dotenv').config() }
const config = require('../config.json');

const Discord = require('discord.js');
const client = new Discord.Client();

const commander = require('./commandController');
const controller = new commander.Controller(config);

const serverInit = require('./server/index');

const eventBus = require('./utility/EventBus');

client.once('ready', () => {
    console.log('Bot up and running!');
    serverInit();
});

const CHANNEL_ID = process.env.CHANNEL_ID;
const GUILD_ID = process.env.GUILD_ID;

client.on('message', async (message) => {
  if (message.author.bot) return;


  const content = message.content.split(/ +/);
  const sender = message.author.username;
  const channel = message.channel;
  try {
    const response = await controller.parseCommand(content[0], content.slice(1));
    channel.send(response);
  }catch(e){
    if(e) { channel.send(e); }
  }
});

eventBus.$on('send-message', (message) => {
  const guild = client.guilds.get(GUILD_ID);
    if (guild && guild.channels.get(CHANNEL_ID)){
        guild.channels.get(CHANNEL_ID).send(message).then(() => client.destroy());
    } else {
        console.log("Can't get guild / Channel");
        //if the bot doesn't have guild with the id guildid
        // or if the guild doesn't have the channel with id channelid
    }
})

client.login(process.env.BOT_TOKEN);
