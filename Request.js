const https = require("https");


module.exports =  function Request(message, url, f) {
    try {
        https.get(url, (resp) => {

            let data = "";
            //Data piece receive
            resp.on('data', (piece) => {
                data += piece;
            });
            // Print out the result.
            resp.on('end', () => {
                utfstring = unescape(encodeURIComponent(data));
                try {
                    f(JSON.parse(utfstring));
                } catch (err) {
                    message.channel.send("Something went wrong");
                    return;
                }
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    } catch (err) {
        console.log(err);
        message.channel.send("No data found :(");
    }
}