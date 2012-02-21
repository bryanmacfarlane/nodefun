
var net = require('net');

var sockets = [];

var s = net.createServer(function(socket) {

    // stuff away the new client socket connection
    sockets.push(socket);
    socket.write("Welcome to the worlds hackiest chat server\r\n");

    socket.on('data', function(d) {

        // when the chat server receives data,
        // iterate and send the data to everyone connected
        for (var i = 0; i < sockets.length; i++) 
        {
            // don't echo to the client typing
            if (sockets[i] == socket) continue;
            sockets[i].write(d);
        }

    });

    socket.on('end', function() {
        var i = sockets.indexOf(socket);
        sockets.splice(i, 1);
    });

});

s.listen(7000);
console.log("chat server listening on " + s.address().port);


// telnet bryanmacDev 7000
// ctrl]
// quit