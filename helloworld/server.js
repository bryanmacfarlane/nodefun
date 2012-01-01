/**
 *
 * Basic node http server
 *
 * Created : bryan
 * Date    : 1/1/12
 */

var http = require("http");
console.log("http created");

var server = http.createServer
    (
        function(request, response)
        {
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write("Hello World");
            response.end();
        }
    );
console.log("server created");

var port = 8888;
server.listen(port);

console.log("server listening on port: " + port);






