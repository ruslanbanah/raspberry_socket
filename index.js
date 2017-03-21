const config = require('config.json')('./config.json');
var express = require('express');
app = express();
server = require('http').createServer(app);
io = require('socket.io').listen(server);

var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort(config.COM.port, { baudrate: config.COM.baudrate });

server.listen(config.server.port);
app.use(express.static('public'));

var brightness = 0;

io.sockets.on('connection', function (socket) {
	var user_id = socket.id;
	socket.on('led', function (data) {
		brightness = data.value;
		
		var buf = new Buffer(1);
		buf.writeUInt8(brightness, 0);
		serialPort.write(buf);
		console.log('User: ', user_id,' Change : ',brightness)
		io.sockets.emit('led', {value: brightness});	
	});
	
	// socket.emit('led', {value: brightness});
	console.log('Client connected: ', user_id)
});

console.log("Server running...");
