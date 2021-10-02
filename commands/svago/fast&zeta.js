const Discord = require('discord.js');

module.exports = {
    name: 'fast&zeta',
    aliases: ['fastandzeta', 'fast'],
    category: 'Svago',
    utilisation: '{prefix}magik',

    execute(client, message) {
        const fastembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**BRUUUUUUUUUUUUUUUUUUUUUUUUUMMMMM!!!!!!!!!!!!!!!!!**')
        .setDescription('**MAMMAAAAAH!1! MAMMAAAAAH!1! MACCHINA CON CAVALO!!1!!**')
        .setImage('https://media.giphy.com/media/mUJ07Uu1oqSKbBW8zB/giphy.gif')
    message.channel.send(fastembed)
    },
};