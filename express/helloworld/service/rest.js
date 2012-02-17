/**
 * REST request class
 *
 * User: bryanmac
 * Date: 2/10/12
 */

var http = require("http");
var https = require("https");

/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
exports.getJSON = function(options, onResult)
{
    console.log("rest::getJSON");

    var prot = options.port == 443 ? https : http;
    var req = prot.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = eval("(" + output + ")");
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });

    req.end();
};

/**
 * postJSON: post a JSON object to a REST service
 *
 * @param options
 * @param callback: callback to pass the results JSON object(s) back
 */
exports.postJSON = function(options, data, onResult)
{
    console.log("rest::postJSON");

    var prot = options.port == 443 ? https : http;
    var req = prot.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            console.log('end: ' + output);
            var obj = eval("(" + output + ")");
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        console.log('error: ' + err.message);
    });

    req.write(JSON.stringify(data));
    req.end();
};

/**
 * deleteJSON: send a delete REST request with an id to delete
 *
 * @param options: http server options object
 * @param itemId: item id to delete
 * @param callback: callback to pass the results JSON object(s) back
 */
exports.deleteJSON = function(options, itemId, onResult)
{
    console.log("rest::deleteJSON");

    var prot = options.port == 443 ? https : http;
    var req = prot.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = eval("(" + output + ")");
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        // res.send('error: ' + err.message);
    });

    req.end();
};