var fs = require('fs');
var https = require('https');
var options = {
    hostname: 'localhost',
    port: 4433,
    path: '/',
    method: 'GET',
    key: fs.readFileSync('private/scratch/client1-key.pem'),
    cert: fs.readFileSync('private/scratch/client1-crt.pem'),
    ca: fs.readFileSync('private/scratch/ca-crt.pem') };
var req = https.request(options, function(res) {
    res.on('data', function(data) {
        process.stdout.write(data);
    });
});
req.end();
req.on('error', function(e) {
    console.error(e);
});