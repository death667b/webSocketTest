var express = require('express');
var webSocketServer = require('ws').Server, 
    wss = new webSocketServer({port: 40510});

wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received %s', message);
    });

    setInterval( () => ws.send(`${new Date()}`), 1000 );
});

var app = express();

app.get('/', function(req,res){
    res.sendfile(__dirname + '/ws.html');
});

app.listen(3000, () => console.log('Listening on port 3000'));


