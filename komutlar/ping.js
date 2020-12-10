const Discord = require('discord.js');

exports.run =async(client,message,args) =>{
 message.channel.send("Pong!")
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
}
exports.help = {
 name: "ping"
}
