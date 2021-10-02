const Discord = require('discord.js');
const redditFetch = require('reddit-fetch');

module.exports = {
    name: 'meme',
    aliases: [],
    category: 'Svago',
    utilisation: '{prefix}meme',

    execute(client, message) {
        redditFetch({
        
            subreddit: 'memesITA',
            sort: 'top',
            allowNSFW: true,
            allowModPost: true,
            allowCrossPost: true,
            allowVideo: false
            
        }).then(post => {
            const memeembed = new Discord.MessageEmbed()
                .setTitle(`Ecco un meme capo`)
                .setColor('RANDOM')
                .setImage(post.url)
                .setFooter('Se non carica vuol dire che è un video... e gli embed non supportano video')
            message.channel.send(memeembed);
        })
    },
};