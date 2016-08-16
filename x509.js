var fs = require('fs');

var soap = require('soap');
var X509HttpClient = require('soap-x509-http');

//var url = 'https://gs1tradesync-uat.pro-sharp.hu:5556/DataRecipientOperationsService.svc?wsdl';
var url = 'http://localhost:8000/dr?wsdl';
var args = {
    "catalogueItemSubscriptionType": {
        "creationDateTime": "2016-08-15T18:32:18.082Z",
        "dataRecipient": 5790002328275,
        "dataSource": "123",
        "gtin": "456",
        "targetMarket": {
            "targetMarketCountryCode": 208
        }
    },
    "standardBusinessDocumentHeader": {
        "HeaderVersion": "1.0",
        "Sender": {
            "Identifier": {
                "attributes": {
                    "Authority": "GS1"
                },
                "$value": 5790002328275
            }
        },
        "Receiver": {
            "Identifier": {
                "attributes": {
                    "Authority": "GS1"
                },
                "$value": 5790000000029
            }
        },
        "DocumentIdentification": {
            "Standard": "GS1",
            "TypeVersion": "3.1",
            "InstanceIdentifier": "Fooducer¤Message¤2ab2b87e-35cc-4087-9b74-1bcb4971b8db",
            "Type": "catalogItemSubscription",
            "MulpleType": false,
            "CreationDateAndTime": "2016-08-15T18:32:18.083Z"
        }
    }
};

var cert = fs.readFileSync('private/cert/Gs1TradeSyncUATClient.pem', 'utf8');
var key = fs.readFileSync('private/cert/TestClientCert.pem', 'utf8');
var pfx = fs.readFileSync('private/cert/TestClientCert.pfx', 'utf8');

var wsdl_options = {
    pfx: pfx,
    passphrase: 'Alma1234',
    ca: cert,
    rejectUnauthorized: false
};
var credentials = {
    key: key
};

var options = {
    cert: key,
    key: key
};

var myX509Client = new X509HttpClient(wsdl_options, credentials);

soap.createClient(url, {
    wsdl_options: wsdl_options,
    httpClient: myX509Client
}, function(err, client){
//soap.createClient(url, {}, function(err, client){
    if (err) {
        console.error('failed to create client', err);
    }else {
        console.log('created client');
        client.AddSubscription(args, function(err, result){
           if (err) {
               console.error('failed to call add subscription', err)
           } else{
               console.log('added subscription', result);
           }
        });
    }
});

/*
soap.createClient(url, {
        wsdl_headers: {},
        wsdl_options: {
            pfx: fs.readFileSync('private/TestClientCert.pfx'),
            passphrase: 'Alma1234',
            ca: fs.readFileSync('private/Gs1TradeSyncUATClient.cer'),
            rejectUnauthorized: false
        },
        httpClient: myX509Client
    },
    function(err, client) {
        client.AddSubscription(args, function(err, result) {
            console.log(result);
        });
    });
*/