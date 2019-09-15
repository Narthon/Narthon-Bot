const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login("NjIyODA2NTMwOTU3NTA4NjA5.XX5X2g.kou-KkT0-8skTPC0emTQF45K_uk");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commands: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bienvenue :)");
        console.log("Commande Salut effectué");
    }
});
