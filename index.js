const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
client.config = require('./config/config');
client.commands = new Discord.Collection();
require('discord-buttons')(client);
fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Caricato comando: ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Caricato evento: ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

client.login(client.config.discord.token);
