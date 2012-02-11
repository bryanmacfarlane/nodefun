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

exports.getStudent = function(req, res, next)
{
    console.log('studentsSvc::getStudent');
    var id = req.params.id;
    if (id)
    {
        console.log('studentSvc::getStudent - ' + id);
        parse.retrieve("students", id,
            function(result)
            {
                console.log("onResult: " + JSON.stringify(result));
                res.send(result);
            });
    }
    else
    {
        next();
    }
}

exports.createStudent = function(req, res)
{
    console.log("studentSvc::createStudent");
    var student = req.body;
    console.log("created");
    console.log('studentSvc::createStudent: ' + JSON.stringify(student));

    parse.create("students", student,
        function(result)
        {
            console.log("onResult: " + JSON.stringify(result));
            res.send(result);
        });

    // grab individual form fields
    // res.send('firstName is ' + req.body['firstName']);
};

//  curl -X DELETE -H "Content-Type: application/json" http://bryandev.local:3333/service/students/1gCfbaK83P
exports.deleteStudent = function(req, res)
{
    console.log('studentSvc::deleteStudent');
    var id = req.params.id;

    console.log('studentSvc::deleteStudent - ' + id);
    parse.delete("students", id,
        function(result)
        {
            console.log("onResult: " + JSON.stringify(result));
            res.send(result);
        });
}


