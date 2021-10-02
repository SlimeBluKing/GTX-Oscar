const Discord = require('discord.js');
const Levels = require('discord-xp')

module.exports = {
    name: 'leaderboard',
    aliases: ['lb'],
    category: 'Svago',
    utilisation: '{prefix}leaderboard',

    async execute(client, message, args) {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10);
        if (rawLeaderboard.length < 1) return reply("Ancora nessuno nella leaderboard");
        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true);
        const lb = leaderboard.map(e => `**${e.position}**. **${e.username}#${e.discriminator}**\n**Level**: ${e.level}\n**XP**: ${e.xp.toLocaleString()}`);
    
        const lbembed = new Discord.MessageEmbed()
            .setTitle('**Leaderboard**')
            .setColor('RANDOM')
            .setDescription(`${lb.join("\n\n")}`)
            .setFooter(client.user.username, client.user.displayAvatarURL())
        message.channel.send(lbembed);
    },
};