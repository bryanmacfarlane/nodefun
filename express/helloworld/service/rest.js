/**
 * REST request class
 *
 * User: bryanmac
 * Date: 2/10/12
 */

var http = require("http");
var https = require("https");

exports.getJSON = function(options, callback)
{
    console.log("rest::getJSON");

    var prot = options.port == 443 ? https : http;
    var gReq = prot.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = eval("(" + output + ")");
            callback(obj);
        });
    });

    gReq.on('error', function(err) {
        gRes.send('error: ' + err.message);
    });

    gReq.end();
};
