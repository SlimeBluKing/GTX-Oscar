const mongo = require('../config/mongo')
const stati = require('../assets/stati.json')

module.exports = async (client) => {
    console.log('-----------------------------')
    console.log('Bot avviato');
    console.log('-----------------------------')
    await mongo().then(mongoose => {
        try {
            console.log('Connesso al database')
            console.log('-----------------------------')
        }catch (err) {
            console.log('Impossibile connettersi al database')
            console.log(err)
            console.log('-----------------------------')
        }
    })
    setInterval(() => {
        let random = Math.floor(Math.random() * stati.length -1) + 1;
        client.user.setActivity(stati[random]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
}