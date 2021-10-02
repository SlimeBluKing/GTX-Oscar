const Discord = require('discord.js');

module.exports = {
    name: 'serverinfo',
    aliases: ['sinfo'],
    category: 'Infos',
    utilisation: '{prefix}serverinfo',

    async execute(client, message) {
        var server = message.member.guild;
        var categoryCount = server.channels.cache.filter(c => c.type == "category").size
        var textCount = server.channels.cache.filter(c => c.type == "text").size
        var voiceCount = server.channels.cache.filter(c => c.type == "voice").size

        var embed = new Discord.MessageEmbed()
            .setTitle(server.name)
            .setDescription("Tutte le info su questo server")
            .setThumbnail(server.iconURL())
            .addField("Capo", "<@642078775823302716>", true)
            .addField("ID del server", "```" + server.id + "```", true)
            .addField("Regione del server", "```" + server.region + "```", true)
            .addField("Membri", "```Total: " + server.memberCount + "```", false)
            .addField("Canali", "```Categorie: " + categoryCount + " - Testuali: " + textCount + " - Vocali: " + voiceCount + "```", false)
            .addField("Data di creazione", "```" + server.createdAt.toDateString() + "```", true)
            .addField("Livello Boost", "```Level " + server.premiumTier + " (Boost: " + server.premiumSubscriptionCount + ")```", true)

    message.channel.send(embed)
    },
};