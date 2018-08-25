const Discord = require("discord.js");
const Config = require("./config.json");
const Token = require("./token.json");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log('${bot.user.username} is online ');
    bot.user.setActivity("work is progress", {type: "STREAMING"});
});

bot.on("message", async message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    message.channel.send("asd 123 123");
});

bot.login(Token.token);
