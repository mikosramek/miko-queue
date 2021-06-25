const Discord = require('discord.js');
const client = new Discord.Client();

const sendMessage = (guildID, channelID, message) => {
  return new Promise((res, rej) => {
    client.login(process.env.BOT_TOKEN).then(() => {
      const guild = client.guilds.get(guildID);
        if (guild && guild.channels.get(channelID)){
          guild.channels.get(channelID).send(message).then(() => client.destroy());
          res('Success');
        } else {
          console.log('Can\'t get guild / Channel');
          //if the bot doesn't have guild with the id guildid
          // or if the guild doesn't have the channel with id channelid
          client.destroy();
          rej('Can\'t get guild / Channel')
        }
    }).catch(rej);
  })
}

module.exports = {
  sendMessage
}
