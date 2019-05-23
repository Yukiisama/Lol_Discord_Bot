// Load up the discord.js library
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const config_tok = require("./config_noshare.json"); // Private config in which you can specify your token if you want to use local way
var webshot = require('webshot');
var fs = require('fs');
var options = {
    screenSize: {
        width: 1900
      , height: 1150
      },
    shotOffset: {
        left: 437,
        right: 0,
        top: 0,
        bottom: 0
    },
    shotSize: {
        width: 'all',
        height: 1150
    },
    siteType: 'url',
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
    if (command === "hero") {
        if (args[1] != 'middle' && args[1] != 'support' && args[1] != 'top' && args[1] != 'adc' && args[1] != 'jungle' || args.length > 2) {
            message.channel.send("Command line is !a hero <champion> <middle/support/jungle/adc/top");
        } else {
            webshot('https://u.gg/lol/champions/' + args[0] + '/build/?role=' + args[1], 'nidalee.png', options, function (err) {
                if (!err) {
                    console.log('Screenshot taken!');
                    message.channel.send("", {
                        files: ['./nidalee.png']
                    }).then().catch(console.error);
                }
            });
            options.shotOffset.top += 1179;
            options.shotSize.height = 1020-170;
            options.screenSize.height=1020-170;
            webshot('https://u.gg/lol/champions/' + args[0] + '/build/?role=' + args[1], 'nidalee2.png', options, function (err) {
                if (!err) {
                    console.log('Screenshot taken!');
                    message.channel.send("", {
                        files: ['./nidalee2.png']
                    }).then().catch(console.error);
                }
            });
            options.shotOffset.top += 1000-179;
            options.shotSize.height = 550;
            options.screenSize.height=550;
            webshot('https://u.gg/lol/champions/' + args[0] + '/build/?role=' + args[1], 'nidalee3.png', options, function (err) {
                if (!err) {
                    console.log('Screenshot taken!');
                    message.channel.send("", {
                        files: ['./nidalee3.png']
                    }).then().catch(console.error);
                }
            });
            options.shotOffset.top = 0;
            options.shotSize.top = 1100;
            options.screenSize.height=1080;
        }
    }
});

client.login(config_tok.token); //Local way
//client.login(process.env.TOKEN); //Heroku way