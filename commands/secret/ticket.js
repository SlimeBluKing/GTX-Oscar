const Discord = require('discord.js');
const disbut = require("discord-buttons");

module.exports = {
    name: 'ticket',
    aliases: ['tk'],
    category: 'Secret',
    utilisation: '{prefix}ticket',

    async execute(client, message, args) {
      if (message.member.hasPermission("ADMINISTRATOR")){
        if (args.join(" ").toLowerCase() === 'partner') {
          const ticketdummyembed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('**RICHIESTA PARTNERSHIP**')
            .setDescription('Vuoi fare partnership con noi? Bene!\nApri un ticket cliccando il pulsante.\n**N.B.**: prima di richiedere partnership leggi <#833597454074380298>')
            .setFooter('Se non riesci ad aprire un ticket, contatta in dm lo staff')
        
          let button = new disbut.MessageButton()
            .setLabel("Richiedi partnership")
            .setID("ticket-partner")
            .setStyle("green");
  
          message.channel.send(ticketdummyembed, button);
        } else {
          const ticketdummyembed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Vuoi ricevere assistenza?')
            .setDescription('Vuoi ricevere assistenza?\nApri un ticket cliccando il pulsante.')
            .setFooter('Se non riesci ad aprire un ticket, contatta in dm lo staff')
        
          let button = new disbut.MessageButton()
            .setLabel("Apri un ticket")
            .setID("ticket")
            .setStyle("green");
  
          message.channel.send(ticketdummyembed, button);
        }
      }
    },
};