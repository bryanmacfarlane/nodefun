var express = require("express");
var app = express.createServer();
var io = require("socket.io").listen(app);




// Configure search path for static content
app.configure(function () {
    app.use(express.static(__dirname + "/content"));
});

// Handler for "/" (root) requests
app.get("/", function (request, response) {
    response.sendfile(__dirname + '/index.html');
});

// Start the app
app.listen(8099);






// Socket.IO connection handler
io.sockets.on("connection", function (socket) {

    // Send the welcome message to the client
    socket.emit("welcome", { text: "Connected..." });

    // Handler for "move" message
    socket.on("move", function (data) {
        io.sockets.emit("move", data);
    });
});