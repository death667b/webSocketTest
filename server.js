var express = require('express');
var app = express();
var webSocketServer = require('ws').Server, wss = new webSocketServer({port: 40510});

wss.on('connection', ws => {
    ws.on('message', message => console.log('received %s', message));
    setInterval( () => ws.send(`${new Date()}`), 1000 );
});

app.get('/', (req,res) => res.sendFile(__dirname + '/ws.html'));

app.listen(3000, () => console.log('Listening on port 3000'));


