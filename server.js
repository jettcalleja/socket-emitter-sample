var http = require('http').Server;
var redisAdapter = require('socket.io-redis');
var io = require('socket.io');

var srv = http();
var sio = io(srv, {adapter: redisAdapter()});

srv.listen(3000, function () {});