const Discord = require('discord.js');
const insulti = require('../../assets/insulti.json')

module.exports = {
    name: 'insulta',
    aliases: ["sputtana", "incula"],
    category: 'Svago',
    utilisation: '{prefix}insulta [nome]',

    async execute(client, message, args) {
        var nome = args[0]
        if (args.length < 1) return message.reply(" ma il nome?")
        let random = Math.floor(Math.random() * insulti.length - 1) + 1;
        message.channel.send(nome + insulti[random]);
    },
};