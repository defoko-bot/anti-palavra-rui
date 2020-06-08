const antimarkdown = require('remove-markdown')
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log("vivo eee");
});

bot.on("message", (msg)=>  {
    const palavrar_proibida = ["ayato", "exposed", "equisposed", "aiato"]
    for(let i = 0; i = palavrar_proibida.length; i++){
        if(msg.content.includes(antimarkdown(palavrar_proibida[i]))){
            msg.delete()
            msg.channel.send(`${msg.author} n fala isso kraio`)
        }
    }
});

bot.login(process.env.BOT_TOKEN); //terminei eu acho