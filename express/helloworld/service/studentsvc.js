/**
 * Students REST Service
 *
 * User: bryanmac
 * Date: 2/9/12
 */

var parse = require('./parse.js');
var secrets = require("./secrets.js");

parse.initialize(secrets.getParseAppId(),
                 secrets.getParseAPIKey());

exports.queryStudents = function(req, res)
{
    parse.query("students",
        function(result)
        {
            console.log("onResult: " + JSON.stringify(result));
            res.send(result);
        });
};

exports.getStudent = function(req, res)
{
    var studentId = req.params.id;
    console.log('studentSvc::getStudent - ' + studentId);
    parse.retrieve("students", studentId,
        function(result)
        {
            console.log("onResult: " + JSON.stringify(result));
            res.send(result);
        });
};

