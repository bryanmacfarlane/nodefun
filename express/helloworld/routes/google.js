/**
 *
 * module to load google http request.  illustrates simple use of http get in a non-blocking manner.
 *
 * Created : bryan
 * Date    : 2/7/12
 */

var http = require("http");

exports.getHome = function(req, res)
{
    var options = {
        host: 'www.google.com',
        port: 80,
        path: '/',
        method: 'GET'
    };

    //
    // On initial response
    //
    var gReq = http.request(options, function(gRes)
    {
        console.log(options.host + ':' + gRes.statusCode);
        gRes.setEncoding('utf8');

        gRes.on('data', function (chunk) {
            res.write(chunk);
        });

        gRes.on('end', function() {
            res.end();
        });
    });

    gReq.on('error', function(err) {
        res.send('error: ' + err.message);
    });

    gReq.end();
};