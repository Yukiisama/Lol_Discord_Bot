// Load up the discord.js library
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
//Decomment this if local
//const config_tok = require("./config_noshare.json"); // Private config in which you can specify your token if you want to use local way
var webshot = require('webshot');
var fs = require('fs');
var options = {
    screenSize: {
        width: 1900,
        height: 810
    },
    shotOffset: {
        left: 437,
        right: 0,
        top: 65,
        bottom: 0
    },
    shotSize: {
        width: 1100, // can be 'all' or 'window' or number
        height: 810
    },
    siteType: 'url',
};
var role_array = ["top", "middle", "jungle", "adc", "support"];
/***********************************************************END VARIABLES*********************************************************************************** */

/**
 * 
 * @param {*} img_name the image_name you want to register
 * @param {*} path the path to the image called img_name
 * @param {*} website the website you want to screenshot
 * @param {*} message the discord message (i.e client has asked to our bot)
 */
function shot(img_name, path, website, message) {
    webshot(website, img_name, options, function (err) {
        if (!err) {
            console.log('Screenshot taken!');
            message.channel.send("", {
                files: [path]
            }).then().catch(console.error);
        }
    });
}

/**
 * Treat the message and check if there is something to do 
 */
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
    if (command === "corobizar") {
        message.channel.send("https://www.twitch.tv/corobizar");
    }
    if (command === "mv") {
        message.channel.send("https://www.twitch.tv/mistermv");
    }
    if (command === "gummy") {
        message.channel.send("https://www.twitch.tv/elgummy115");
    }
    if (command === "yukii") {
        message.channel.send("https://www.twitch.tv/suyukii");
    }
    if (command === "randomrole") {
        message.channel.send(role_array[Math.floor(Math.random()*role_array.length)]);
    }
    if (command === "hero") {
        if (args[1] != role_array[1] && args[1] != role_array[4] && args[1] != role_array[0] &&
            args[1] != role_array[3] && args[1] != role_array[2] || args.length > 2) {
            message.channel.send("Command line is !a hero <champion> <middle/support/jungle/adc/top");
        } else {
            var ugg_website = 'https://u.gg/lol/champions/' + args[0] + '/build/?role=' + args[1];
            shot('nidalee.png', './nidalee.png', ugg_website, message);
            options.shotOffset.top += 813;
            options.shotSize.height = 644;
            options.screenSize.height = 644;
            shot('nidalee1.png', './nidalee1.png', ugg_website, message);
            options.shotOffset.top += 821;
            options.shotSize.height = 850;
            options.screenSize.height = 850;
            shot('nidalee2.png', './nidalee2.png', ugg_website, message);
            options.shotOffset.top = 65;
            options.shotSize.height = 810;
            options.screenSize.height = 810;

        }
    }
});

//client.login(config_tok.token); //Local way
client.login(process.env.TOKEN); //Heroku way
