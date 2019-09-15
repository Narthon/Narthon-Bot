const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login("NjIyODA2NTMwOTU3NTA4NjA5.XX5c8w.uYwzfJRa4tDz19u4vuLnOVfSTS8");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commands: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bienvenue :)");
        console.log("Commande Salut effectué");
    }
});
