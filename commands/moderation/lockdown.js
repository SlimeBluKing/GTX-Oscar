module.exports = {
    name: 'lockdown',
    aliases: ['raid', 'lock'],
    category: 'Moderazione',
    utilisation: '{prefix}lockdown [on/off]',

    async execute(client, message, args) {
        if (!message.member.hasPermission(["MANAGE_CHANNELS"])) return message.reply('non puoi farlo')
        const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    CONNECT: false
                }).then(() => {
                    channel.setName(channel.name += `🔒`)
                })
            })
            return message.channel.send('Bloccati i canali');
        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, { 
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true,
                    CONNECT: true
                }).then(() => {
                    channel.setName(channel.name.replace('🔒', ''))
                })
            })
            return message.channel.send('Sbloccati i canali')
        }
    },
};