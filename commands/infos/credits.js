const Discord = require('discord.js');

module.exports = {
    name: 'crediti',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}crediti',

    execute(client, message) {
        const creembed = new Discord.MessageEmbed()
            .setColor('#08415D')
            .setTitle('Crediti')
            .addField("Idea", "```Ranger_GTX```", true)
            .addField("Developer", "```SlimeBluKing```", true)
            .addField("Grafico", "```Cristy```", true)
            .addField("Grazie a", "```darkfili, SimoAll, Gufo, Riccardo Zeta e un utente cancellato(per davvero)```per aver contribuito alla realizzazione del bot")
            .attachFiles('./assets/Banner_Oscar_2.jpg')
            .setImage('attachment://Banner_Oscar_2.jpg')
            .setFooter('Grazie ヾ(•ω•`)o')
        message.channel.send(creembed)
    },
};