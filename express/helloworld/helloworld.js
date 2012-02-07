/**
 *
 * Hello World Express App
 *
 * Created : bryan
 * Date    : 2/6/12
 */

//
// Create express server
//
var express = require('express');
var app = express.createServer();

//
// Route '/' to anonymous function that returns 'hello world'
//
app.get('/',
        function(req, res)
        {
            res.send('hello world');
        });

//
// Start
//
app.listen(3333);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
