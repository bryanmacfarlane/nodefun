/**
 *
 * Description here
 *
 * Created : bryan
 * Date    : 2/7/12
 */

exports.getHome = function(req, res)
{
    var http = require("http");

    var options = {
        host: 'www.google.com',
        port: 80,
        path: '/',
        method: 'GET'
    };

    //
    // On initial response
    //
    var googleReq = http.request(options, function(googleResponse)
    {
        console.log('STATUS: ' + googleResponse.statusCode);
        console.log('HEADERS: ' + JSON.stringify(googleResponse.headers));
        googleResponse.setEncoding('utf8');

        //
        // On each chunk
        //
        googleResponse.on('data', function (chunk)
        {
            //googleReq.write(chunk);
            res.write(chunk);
            console.log('\n\n===========CHUNK===============')
            //console.log(chunk);
        });

        //
        // On End
        //
        googleResponse.on('end', function()
        {
            res.end();
            console.log('\n\n=========RESPONSE END===============');
        });
    });

    //
    // On Error
    //
    googleReq.on('error', function(e)
    {
        console.log('\n\n==========ERROR==============')
        console.log('problem with request: ' + e.message);
    });

    // write data to request body
    console.log('\n\n=========REQUEST END===============');
    googleReq.end();
};