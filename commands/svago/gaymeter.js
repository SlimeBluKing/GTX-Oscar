const Discord = require('discord.js');

module.exports = {
    name: 'howgay',
    aliases: [],
    category: 'Svago',
    utilisation: '{prefix}howgay [persona]',

    execute(client, message) {
        const menzione = message.mentions.members.first();
    if(!menzione){
        const weebembed = new Discord.MessageEmbed()
            .setTitle("**GAYMETER**")
            .setDescription("Sei gay al " + Math.floor(Math.random() * 102) + "%")
            .setColor("RANDOM")
            .setFooter(client.user.username, client.user.displayAvatarURL())
        message.channel.send(weebembed)
    }else{
        const weebembed = new Discord.MessageEmbed()
            .setTitle("**Gaymeter**")
            .setDescription("<@" + menzione + ">" + " è gay al " + Math.floor(Math.random() * 101) + "%")
            .setColor("RANDOM")
            .setFooter(client.user.username, client.user.displayAvatarURL())
        message.channel.send(weebembed)
    }
    },
};