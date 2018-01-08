
var ioe = require('socket.io-emitter');
var emitter = ioe({ host: 'localhost', port: '6379' });

emitter.emit('payload', 1);