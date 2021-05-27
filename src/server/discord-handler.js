const Discord = require('discord.js');
const client = new Discord.Client();

const sendMessage = (guild, channel, message) => {
  return new Promise((res, rej) => {
    client.login(process.env.BOT_TOKEN).then(() => {
      const guild = client.guilds.get(guild);
        if (guild && guild.channels.get(channel)){
          guild.channels.get(channel).send(message).then(() => client.destroy());
          res('Success');
        } else {
          console.log('Can\'t get guild / Channel');
          //if the bot doesn't have guild with the id guildid
          // or if the guild doesn't have the channel with id channelid
          rej('Can\'t get guild / Channel')
        }
        client.destroy();
    }).catch(rej);
  })
}

module.exports = {
  sendMessage
}
