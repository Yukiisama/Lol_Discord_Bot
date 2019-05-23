/*
var webshot = require('webshot');

var options = {
     shotSize: {
      width: 'all'
    , height: 'all'
    }
    ,siteType: 'url'
  };

webshot('https://u.gg/lol/champions/nidalee/build/?role=jungle', 'nidalee.png', options, function (err) {
    // screenshot now saved to flickr.jpeg
    if (!err) {
        console.log('Screenshot taken!');
    }
});
*/var webshot = require('webshot');
var fs      = require('fs');

var renderStream = webshot('google.com');
var file = fs.createWriteStream('google.png', {encoding: 'binary'});
renderStream.on('data', function(data) {
  file.write(data.toString('binary'), 'binary');
});