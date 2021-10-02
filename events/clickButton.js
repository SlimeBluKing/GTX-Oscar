const Discord = require('discord.js')

module.exports = async (client, button, message, user) => {
    if (button.id === "ticket") {
        await button.reply.defer()
        const channel = await button.guild.channels.create(`Ticket: ${button.clicker.user.tag}`);
        
        channel.setParent("861326449818861599");
    
        channel.updateOverwrite(button.guild.id, {
          SEND_MESSAGE: false,
          VIEW_CHANNEL: false,
        });
        channel.updateOverwrite(button.clicker.user, {
          SEND_MESSAGE: true,
          VIEW_CHANNEL: true,
        });
        
        const ticketembed = new Discord.MessageEmbed()
          .setTitle('Grazie per aver aperto un ticket')
          .setColor('RANDOM')
          .setDescription('Un membro dello staff sarà quì prima possibile')
          .setFooter(client.user.username, client.user.displayAvatarURL())

        const reactionMessage = await channel.send(ticketembed).then(channel.send('<@&722410867722813440>'));
        
        try {
          await reactionMessage.react("🔒");
          await reactionMessage.react("⛔");
        } catch (err) {
          channel.send("Errore!");
          throw err;
        }
    
        const collector = reactionMessage.createReactionCollector(
          (reaction, user) => button.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
          { dispose: true }
        );
    
        collector.on("collect", (reaction, user) => {
          switch (reaction.emoji.name) {
            case "🔒":
              channel.updateOverwrite(button.clicker.user, { SEND_MESSAGES: false });
              const archiviedticketambed = new Discord.MessageEmbed()
                .setTitle('Ticket archiviato')
                .setColor('RANDOM')
                .setDescription('Questo ticket è stato archiviato, non si può più scrivere, ma rimarrà. Verrà cancellato quando è necessario')
                .setFooter(client.user.username, client.user.displayAvatarURL())
              channel.send(archiviedticketambed);
              break;
            case "⛔":
              const ticketclosedembed = new Discord.MessageEmbed()
                .setTitle('Ticket chiuso')
                .setColor('RANDOM')
                .setDescription('Questo ticket si chiuderà tra 5 secondi')
                .setFooter(client.user.username, client.user.displayAvatarURL())
              channel.send(ticketclosedembed);
              setTimeout(() => channel.delete(), 5000);
              break;
          }
        });
        
        const messagechannelticketembed = new Discord.MessageEmbed()
          .setTitle('Ticket')
          .setColor('RANDOM')
          .setDescription(`Il tuo ticket! ${channel}`)
          .setFooter(client.user.username, client.user.displayAvatarURL())

        button.channel
          .send(messagechannelticketembed).then((msg) => { setTimeout(() => msg.delete(), 7000); }).catch((err) => { throw err; });
    }
    if (button.id === "ticket-partner") {
      await button.reply.defer()
      const channel = await button.guild.channels.create(`Partnership: ${button.clicker.user.tag}`);
      
      channel.setParent("861326449818861599");
  
      channel.updateOverwrite(button.guild.id, {
        SEND_MESSAGE: false,
        VIEW_CHANNEL: false,
      });
      channel.updateOverwrite(button.clicker.user, {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
      });
      
      const ticketembed = new Discord.MessageEmbed()
        .setTitle('Grazie per aver aperto un ticket')
        .setColor('RANDOM')
        .setDescription('Un membro dello staff sarà quì prima possibile\nPer ora inizia ad inviare la descrizione del server.')
        .setFooter(client.user.username, client.user.displayAvatarURL())

      const reactionMessage = await channel.send(ticketembed).then(channel.send('<@&722410867722813440>'));
      
      try {
        await reactionMessage.react("🔒");
        await reactionMessage.react("⛔");
      } catch (err) {
        channel.send("Errore!");
        throw err;
      }
  
      const collector = reactionMessage.createReactionCollector(
        (reaction, user) => button.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
        { dispose: true }
      );
  
      collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
          case "🔒":
            channel.updateOverwrite(button.clicker.user, { SEND_MESSAGES: false });
            const archiviedticketambed = new Discord.MessageEmbed()
              .setTitle('Ticket archiviato')
              .setColor('RANDOM')
              .setDescription('Questo ticket è stato archiviato, non si può più scrivere, ma rimarrà. Verrà cancellato quando è necessario')
              .setFooter(client.user.username, client.user.displayAvatarURL())
            channel.send(archiviedticketambed);
            break;
          case "⛔":
            const ticketclosedembed = new Discord.MessageEmbed()
              .setTitle('Ticket chiuso')
              .setColor('RANDOM')
              .setDescription('Questo ticket si chiuderà tra 5 secondi')
              .setFooter(client.user.username, client.user.displayAvatarURL())
            channel.send(ticketclosedembed);
            setTimeout(() => channel.delete(), 5000);
            break;
        }
      });
      
      const messagechannelticketembed = new Discord.MessageEmbed()
        .setTitle('Ticket')
        .setColor('RANDOM')
        .setDescription(`Il tuo ticket! ${channel}`)
        .setFooter(client.user.username, client.user.displayAvatarURL())

      button.channel
        .send(messagechannelticketembed).then((msg) => { setTimeout(() => msg.delete(), 7000); }).catch((err) => { throw err; });
  }
}