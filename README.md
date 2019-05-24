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
