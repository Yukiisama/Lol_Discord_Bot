# Lol_Discord_Bot
* description will be complete later when more features available
## Explications about dependencies on heroku
In every bot you will do on heroku , you need to specify the dependencies ( i.e the modules your require and you need usual npm install in local) inside the package.json file .
Example if I want discord.js and webshot installed on my heroku app :
```
 "dependencies": {
    "discord.js": "^11.5.0"
    ,"webshot":"0.18.0"
  }
```
## Initialisation local way
```
npm init -y
npm install discord.js
npm install webshot
node index.js
```
## Commands
 * __!a say__ _this is a random sentence_ :  bot delete your message then write what you ask 
 * __!a hero <champion> <top/middle/jungle/adc/support>__: bot send informations from u.gg about the champion you asked for (i.e screenshots) 
 * __!a ping__ : a simple test of ping
 * __!a randomrole__ : give you a random League of Legends role
 * __!a <corobizar/mv/yukii/gummy>__ : bot send twitch channel of corobizar / mister mv / yukii or gummy
 ![](https://imgur.com/Jl6nYL3)
 ![](https://imgur.com/AYicFeU)
