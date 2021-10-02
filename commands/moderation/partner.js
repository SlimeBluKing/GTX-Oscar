const Discord = require('discord.js')

module.exports = {
    name: 'partnership',
    aliases: ['partner'],
    category: 'Moderazione',
    utilisation: '{prefix}partnership {persona} {server}',

    execute(client, message, args) {
            message.channel.bulkDelete(1, true)
            const date = new Date();
            let content = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
            const partneruser = message.mentions.members.first()
            const gestore = message.member
            const server = args.splice(1,50).join(" ")
            if(!partneruser) return
            if(!server) return
            const partnerembed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('**🎉Nuova partnership eseguita🎉**')
                .setDescription("\n\n**🔹Nome server**: " + server + "\n\n**🔹Effettuata con**: <@" + partneruser +  ">\n\n**🔹Eseguita in**: " + content)
            message.channel.send(partnerembed)

            const logpartner = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Log partner')
                .setDescription("\n\n➡️ **Nome server**: " + server + "\n\n➡️ **Effettuata con**: <@" + partneruser +  ">" + "\n\n➡️ **Gestore**: <@" + gestore + ">" +  "\n\n➡️ **Eseguita in**: " + content)
            client.channels.cache.get(`850054152875671592`).send(logpartner)
    },
};