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
var url = require("url");
var querystring = require("querystring");

console.log("http module created.");

function start(route, handle)
{
    console.log("server::start");

    function onRequest(request, response)
    {
        console.log("================================");

        console.log("request received: " + request.url);

        // path
        var pathName = url.parse(request.url).pathname;
        console.log("path name: " + pathName);

        // querystring
        var qs = url.parse(request.url).query;
        if (qs != undefined)
        {
            console.log("querystring: " + qs);

            // requires querystring module
            var qsTable = querystring.parse(qs);
            console.log("querystring[]: " + qs);
            console.log("foo val: " + qsTable["foo"]);
        }

        // route request - pass the response so the handlers can respond
        route(handle, pathName, response);
    }

    var server = http.createServer(onRequest);
    console.log("server created.");

    var port = 8888;
    server.listen(port);

    console.log("server listening on port: " + port);
}

// our module offers (exports) one start method
exports.start = start;





