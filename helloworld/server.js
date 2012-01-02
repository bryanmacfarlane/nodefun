/**
 *
 * Basic node http server module
 *
 * Created : bryan
 * Date    : 1/1/12
 */

// create the http module
// best practice to name variable the same as module
var http = require("http");
console.log("http module created.");

function start()
{
    console.log("server::start");
    var server = http.createServer
        (
            function(request, response)
            {
                // will print twice because of request for favicon.ico
                console.log("request received: " + request.url);
                response.writeHead(200, {"Content-Type": "text/plain"});
                response.write("Hello World!");
                response.end();
            }
        );
    console.log("server created.");

    var port = 8888;
    server.listen(port);

    console.log("server listening on port: " + port);
}

// our module offers (exports) one start method
exports.start = start;





