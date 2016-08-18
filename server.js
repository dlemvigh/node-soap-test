var fs = require('fs');
var https = require('https');
var options = {
    key: fs.readFileSync('private/scratch/server-key.pem'),
    cert: fs.readFileSync('private/scratch/server-csr.pem'),
    ca: fs.readFileSync('private/scratch/ca-crt.pem'),
    requestCert: true,
    rejectUnauthorized: true
};
https.createServer(options, function (req, res) {
    console.log(new Date()+' '+
        req.connection.remoteAddress+' '+
        req.socket.getPeerCertificate().subject.CN+' '+
        req.method+' '+req.url);
    res.writeHead(200);
    res.end("hello world\n");
}).listen(4433);