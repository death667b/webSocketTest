var webSocketServer = require('websocket').client;

var socket = new webSocketServer('localhost:8000');

socket.onopen(function(event) {
    console.log('New websocket has been opened: ', event);
});