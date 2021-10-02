module.exports = {
    name: 'ban',
    aliases: [],
    category: 'Moderazione',
    utilisation: '{prefix}ban [utente] {motivo}',

    async execute(client, message, args) {
        let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Non hai il permesso!") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Non ho il permesso!") 

        const reason = args.splice(1,30).join(" ") || "Nessun motivo";

        toBan.ban({
            reason: reason
        })

        message.channel.send(`${toBan} è stato bannato!\nMotivo: ${reason}`)
    },
};