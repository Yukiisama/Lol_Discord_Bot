// Load up the discord.js library
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

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
        var webshot = require('webshot');
        var fs      = require('fs');
        var options = {
            shotSize: {
                width: 'all',
                height: 'all'
            },
            siteType: 'url'
        };

        webshot('https://u.gg/lol/champions/nidalee/build/?role=jungle', 'nidalee.png', options, function (err) {
            if (!err) {
                console.log('Screenshot taken!');
            }
        });
        message.channel.send('cc', {
            files: [
                "./nidalee.png"
            ]
        });
        fs.unlinkSync("./nidalee.png");
    }

});

//client.login(config.token);
client.login(process.env.TOKEN);