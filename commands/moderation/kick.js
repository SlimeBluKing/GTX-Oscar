module.exports = {
    name: 'kick',
    aliases: [],
    category: 'Moderazione',
    utilisation: '{prefix}kick [utente]',

    execute(client, message) {
        var utente = message.mentions.members.first();

        if (!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send('Non hai il permesso');
            return;
        }

        if (!utente) {
            message.channel.send('Non hai menzionato nessun utente');
            return;
        }

        if (!message.mentions.members.first().kickable) {
            message.channel.send('Io non ho il permesso');
            return
        }

        utente.kick()
            .then(() => message.channel.send("<@" + utente + ">" + " è stato kickato con successo!"))
    },
};