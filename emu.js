var ws = require('websocket.io'),
    server = ws.listen(1981);


server.on('connection', client => {
    client.on('message', () => {});
    client.on('close', () => {});
});


