const Levels = require('discord-xp')
const Discord = require('discord.js')
const canvacord = require("canvacord");

module.exports = async (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;

    const prefix = client.config.discord.prefix;

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) cmd.execute(client, message, args);

     const randomXp = Math.floor(Math.random() * 49) + 1;

    //discord-xp
     const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        const levelembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('**YEE!!**')
            .setDescription(`${message.author}, hai raggiunto il livello **${user.level}**!! :tada:`)
        client.channels.cache.get(`884012652072951848`).send(levelembed)
    }
};