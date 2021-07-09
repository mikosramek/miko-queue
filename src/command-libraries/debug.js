const Embed = require('../utility/embed');

const debug = {};
const ADMINS = process.env.ADMIN;

const checkPrivilege = (message) => {
  try {
    const { id } = message.author;
    const allowed = ADMINS.split('|');
    return allowed.includes(id);
  }
  catch (error) {
    console.error('debug.js@checkPrivilege:', error.message);
    return error.message;
  }
}


debug['d-info'] = function(_query, message) {
  if (!checkPrivilege(message)) return null;
  const { id, name, guild } = message.channel;
  if (!guild) {
    return `${name ? name : 'Chat'} : ${id}`;
  }
  const { id : guildID, name : guildName} = guild;

  const debugEmbed = new Embed(`${guildName} - ${name}`, '#ffffff', null, null);
  debugEmbed.addField('Guild ID', guildID, true);
  debugEmbed.addField('Channel ID', id, true);
  return debugEmbed.embed;
}

debug['d-check-privilege'] = function(_query, message) {
  if (checkPrivilege(message)) {
    console.info(process.env , 'debug.js@');
    return 'Allowed';
  }
  else {
    return null;
  }
};

debug['d-channel-info'] = function(_query, message) {
  if (!checkPrivilege(message)) return null;
  const { id, name, nsfw } = message.channel;

  const debugEmbed = new Embed(`${name}`, '#ffffff', null, null);
  debugEmbed.addField('ID', id, true);
  debugEmbed.addField('Is nsfw', nsfw, true);
  return debugEmbed.embed;
}

debug['d-guild-info'] = function(_query, message) {
  if (!checkPrivilege(message)) return null;
  const { guild } = message.channel;
  const { id : guildID, name : guildName, region, icon, channels, roles, members } = guild;

  const guildIconURL = `https://cdn.discordapp.com/icons/${guildID}/${icon}.png`;
  const channelCount = [...channels].length;
  const roleCount = [...roles].length;
  const memberCount = [...members].length;

  const debugEmbed = new Embed(guildName, '#ffffff', null, guildIconURL);
  debugEmbed.addField('ID', guildID, true);
  debugEmbed.addField('Region', region, true);
  debugEmbed.addBreak();
  debugEmbed.addField('Channels', channelCount, true);
  debugEmbed.addField('Roles', roleCount, true);
  debugEmbed.addField('Members', memberCount);
  return debugEmbed.embed;
}

debug['d-user-info'] = function(_query, message) {
  if (!checkPrivilege(message)) return null;
  const { id : userId, username, discriminator, avatar } = message.author;

  const avatarURL = `https://cdn.discordapp.com/avatars/${userId}/${avatar}.png`;

  const debugEmbed = new Embed(`${username}#${discriminator}`, '#ffffff', null, avatarURL);
  debugEmbed.addField('ID', userId);
  return debugEmbed.embed;
}

debug.rr = function(_query, message) {
  if (!checkPrivilege(message)) return null;
  return 'Reactions to this message are: ';
}

module.exports = debug;
