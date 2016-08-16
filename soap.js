var http = require('http');
var soap = require('soap');
var x509 = require('soap-x509-http')
var fs = require('fs');

var xml = require('fs').readFileSync('private/HelloService.wsdl', 'utf8'),
    server = http.createServer(function(request,response) {
        response.end("404: Not Found: " + request.url);
    });

var drXml = fs.readFileSync('private/wsdl/DataRecipientOperationsService.Single.wsdl', 'utf8');
var dsXml = fs.readFileSync('private/wsdl/DataSourceOperationsService.Single.wsdl', 'utf8');

var myService = {
    Hello_Service: {
        Hello_Port: {
            sayHello: function(args) {
                console.log("called")
                return {
                    greeting: args.firstName,
                    sender: 'node',
                    timestamp: Date()
                }
            }
        }
    },
    MyService: {
        MyPort: {
            MyFunction: function(args) {
                return {
                    name: args.name
                };
            },

            // This is how to define an asynchronous function.
            MyAsyncFunction: function(args, callback) {
                // do some work
                callback({
                    name: args.name
                });
            },

            // This is how to receive incoming headers
            HeadersAwareFunction: function(args, cb, headers) {
                return {
                    name: headers.Token
                };
            },

            // You can also inspect the original `req`
            reallyDetailedFunction: function(args, cb, headers, req) {
                console.log('SOAP `reallyDetailedFunction` request from ' + req.connection.remoteAddress);
                return {
                    name: headers.Token
                };
            }
        }
    }
};

var stub = function(args) {
    return args;
}
var addSubscription = function(args){
    console.log("add subscription", args);
    return {
        originatingMessageIdentifier: {
            entityIdentification: "INVALIDXML"
        },
        receiver: 5790000000029,
        sender: 5716161000005,
        gS1Exception: {
            exceptionMessageTypeCode: "GDSN",
            messageException: {
                gS1Error: {
                    errorCode: "G361",
                    errorDateTime: new Date(),
                    errorDescription: "General XSD failure - not well formed, not referencing correct namespaces"
                }
            }
        }
    }
};

var drService = {
    DataRecipientOperationsService: {
        wsHttpEndpoint: {
            AddRequestForCatalogueItemNotification: stub,
            AddCatalogueItemConfirmation: stub,
            AddSubscription: addSubscription,
            DeleteSubscription: stub
        }
    }
};

var dsService = {
    DataSourceOperationsService: {
        wsHttpEndpoint: {
            ReceiveCatalogueItemNotification: stub,
            ReceiveCatalogueItemHierarchicalWithdrawal: stub
        }
    }
};

server.listen(8000);
soap.listen(server, '/wsdl', myService, xml);
soap.listen(server, '/dr', drService, drXml);
soap.listen(server, '/ds', dsService, dsXml);

console.log("started");
