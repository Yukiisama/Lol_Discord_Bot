# Lol_Discord_Bot

## Explications about dependencies on heroku
In every bot you will do on heroku , you need to specify the dependencies ( i.e the modules your require and you need usual npm install in local) inside the package.json file .
Example if I want discord.js and webshot installed on my heroku app :
```
 "dependencies": {
    "discord.js": "^11.5.0"
    ,"webshot":"0.18.0"
  }
```
