const Discord = require('discord.js');

module.exports = {
    name: 'magik',
    aliases: [],
    category: 'Svago',
    utilisation: '{prefix}magik',

    execute(client, message) {
        const magikembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**MAGIAH**')
        .setDescription('**ABRACADABRUH!1!**')
        .attachFiles('./assets/ZP.jpg')
        .setImage('attachment://ZP.jpg')
    message.channel.send(magikembed)
    },
};