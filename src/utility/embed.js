'use strict'

const Discord = require('discord.js');

const Embed = function(title, color, url, image) {
  this.embed = new Discord.RichEmbed();
  this.embed.setColor(color ? color : '0xffffff');
  this.embed.setTitle(title ? title : '???');
  url ? this.embed.setURL(url) : null;
  image ? this.embed.setImage(image) : null;
};
Embed.prototype.addField = function(title, text = '-', inline = false){
  this.embed.addField(
    title,
    text,
    inline
  );
}
Embed.prototype.addBreak = function(inline = false) {
  this.embed.addBlankField(inline);
}
Embed.prototype.addFooter = function(...footerInfo) {
  const info = [...footerInfo];
  info.forEach((footerItem) => { this.embed.setFooter(footerItem) });
}

module.exports = Embed;
