module.exports = {
    name: 'cancella',
    aliases: ['canc'],
    category: 'Moderazione',
    utilisation: '{prefix}cancella [numero]',

    async execute(client, message, args) {

        var messaggi = args[0];
        messaggi = parseInt(messaggi) + 1;


        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send('Non hai il permesso');
            return;
        }

        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send('Non ho il permesso');
            return;
        }

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`Ti prego metti un numero valido!`);

        message.channel.bulkDelete(messaggi, true)

        message.channel.send(args[0] + " messaggi eliminati").then(msg => {
            msg.delete({ timeout: 5000 })
        })
    },
};