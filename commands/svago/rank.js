const Discord = require('discord.js');
const Levels = require('discord-xp');
const canvacord = require("canvacord");

module.exports = {
    name: 'rank',
    aliases: ['level', 'rk', 'lv'],
    category: 'Svago',
    utilisation: '{prefix}rank',

    async execute(client, message, args) {
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionedMember) mentionedMember = message.member;
    
        const target = await Levels.fetch(mentionedMember.user.id, message.guild.id);
        if (!target) return message.channel.send('Questo utente non ha ancora raggiunto un livello');
    
        try{
            const user = message.mentions.users.first() || message.author;
            const rank = new canvacord.Rank()
                .setAvatar(user.displayAvatarURL({dynamic: false,  format: 'png'}))
                .setCurrentXP(target.xp)
                .setRequiredXP(Levels.xpFor(target.level + 1))
                .setLevel(target.level)
                .setRank(1, "a", false)
                .setStatus(user.presence.status)
                .setProgressBar('#FFA500', "COLOR")
                .setUsername(user.username)
                .setDiscriminator(user.discriminator)
            rank.build()
                .then(data => {
                    const attachemnt = new Discord.MessageAttachment(data, `rank.png`)
                    const levelembed = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle('**RANK**')
                        .attachFiles(attachemnt)
                        .setImage('attachment://rank.png')
                    message.channel.send(levelembed);
                })
        }catch (err){
            console.log(err);
        }
    },
};