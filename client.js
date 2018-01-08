var ioc = require('socket.io-client');
var cli = ioc('http://localhost:3000', { forceNew: true });

cli.on('connect', function () {
    console.log('client connected');
});

cli.on('payload', function(a) {
    console.log(a);
});