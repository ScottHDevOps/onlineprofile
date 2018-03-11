var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.set('heartbeat interval', 1);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    io.on('connect', function () {
        console.log('a user connected');
        socket.broadcast.to(socket.sessionid).emit('chat message', 'Hey welcome to my server, be fair and play nice!');
        //console.log();
    });
    socket.on('ping', function () {
        socket.emit('pong');
    });
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('chat message', function (msg) {
        socket.broadcast.emit('chat message', msg);
        console.log('message: '+msg);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});