const Discord = require('discord.js');

module.exports = {
    name: 'poll',
    aliases: [],
    category: 'Altro',
    utilisation: '{prefix}pool #canale [frase]',

    async execute(client, message, args) {
        let pollChannel = message.mentions.channels.first();
        let pollDesc = args.slice(1).join(' ');
    
        if(!pollChannel){
            message.channel.bulkDelete(1)
            message.channel.send('Capo, devi menzionare il canale')
            return
        }
    
        let embedPoll = new Discord.MessageEmbed()
            .setTitle('**SONDAGGIO**')
            .setDescription(pollDesc)
            .setColor('RANDOM')
            .attachFiles('./assets/Sondaggio.png')
            .setThumbnail('attachment://Sondaggio.png')
            .setFooter(client.user.username, client.user.displayAvatarURL())
        message.channel.bulkDelete(1)
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    },
};