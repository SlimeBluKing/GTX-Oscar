module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Infos',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            //const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');
            const svago = message.client.commands.filter(x => x.category == 'Svago').map((x) => '`' + x.name + '`').join(', ');
            const altro = message.client.commands.filter(x => x.category == 'Altro').map((x) => '`' + x.name + '`').join(', ');
            const mod = message.client.commands.filter(x => x.category == 'Moderazione').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Comandi' },
                    fields: [
                        { name: 'Info', value: infos },
                        { name: 'Svago', value: svago },
                        { name: 'Moderazione', value: mod },
                        //{ name: 'Musica', value: music },
                        { name: 'Altro', value: altro },
                    ],
                    timestamp: new Date(),
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Non riesco a trovare il comando!`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Help pannel' },
                    fields: [
                        { name: 'Nome', value: command.name, inline: true },
                        { name: 'Categoria', value: command.category, inline: true },
                        { name: 'Aliases', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilizzo', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                }
            });
        };
    },
};