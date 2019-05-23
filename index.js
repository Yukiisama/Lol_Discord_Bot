// Load up the discord.js library
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var webshot = require('webshot');
var fs      = require('fs');
var options = {
    shotSize: {
        width: 'all',
        height: 'all'
    },
    siteType: 'url'
};
client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }

    if (command === "say") {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => {});
        message.channel.send(sayMessage);
    }
    if (command === "img") {
        message.channel.send("hey");

        //fs.unlinkSync("./nidalee.png");
    }

});

//client.login(config.token);
client.login(process.env.TOKEN);