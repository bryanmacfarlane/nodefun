/**
 *
 * Description here
 *
 * Created : bryan
 * Date    : 2/7/12
 */

var http = require("https");

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET'
};

//
// On initial response
//
var req = http.request(options, function(res)
{
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');

    //
    // On each chunk
    //
    res.on('data', function (chunk)
    {
        req.write(chunk);
        console.log('\n\n===========CHUNK===============')
        console.log(chunk);
    });

    //
    // On End
    //
    res.on('end', function(res)
    {
        console.log('\n\n=========RESPONSE END===============');
    });
});

//
// On Error
//
req.on('error', function(e)
{
    console.log('\n\n==========ERROR==============')
    console.log('problem with request: ' + e.message);
});

// write data to request body
console.log('\n\n=========REQUEST END===============');
req.end();