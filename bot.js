const removemd = require('remove-markdown')
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
    console.log("vivo eee");
});

bot.on("message", (msg)=>  {
    const palavra = ["ayato", "exposed", "equisposed", "aiato"]
    for(let i = 0; i = palavra.length; i++){
        if(msg.content.includes(removemd(palavra[i]))){
            msg.delete()
            msg.channel.send(`${msg.author} n fala isso kraio`)
        }
    }
});

bot.login(process.env.BOT_TOKEN); //terminei eu acho
