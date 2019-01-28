const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("539438256945889282")
setInterval(function() {
channel.send(`zax zax zax `);
}, 30)
})

client.login(process.env.BOT_TOKEN);