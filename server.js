var webSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(req, res) {
    // process response
    console.log('Create Server Request');
});
server.listen(8000);

wsServer = new webSocketServer({
    httpServer: server
});

wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);

    connection.on('message', function(message){
        // Process message
        console.log('I have a message: ', message);
    });

    connection.on('close', function(connection) {
        // Closing connection
        console.log('connection closing: ', connection);
    })
})