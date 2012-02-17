/**
 * Students REST Service
 *
 * User: bryanmac
 * Date: 2/9/12
 */

var parse = require('./parse.js');
var secrets = require("./secrets.js");
var validator = require("../public/common/validator.js");

/**
 * Initialize the parse API with out secrets.  Separated secrets into separate file for purposes of demo
 */
parse.initialize(secrets.getParseAppId(),
                 secrets.getParseAPIKey());

/**
 * Get a list of all students (no filter)
 *
 * @param   req: the http server request object
 * @param   res: the http server response object
 */
exports.queryStudents = function(req, res)
{
    console.log('\nstudentsSvc::queryStudents');
    parse.query("Student",
        function(statusCode, result)
        {
            // The service will need the full objects for processing in the service
            for (index in result.results)
            {
                var student = result.results[index];
                console.log('student: ' + student.name);
            }

            res.statusCode = statusCode;
            res.send(result);
        });
};

/**
 * Get a specific student by id
 *
 * @id      id of student to get (req.params.id)
 * @param   req: the http server request object
 * @param   res: the http server response object
 */
exports.getStudent = function(req, res, next)
{
    console.log('\nstudentsSvc::getStudent');
    var id = req.params.id;
    if (id)
    {
        console.log('studentSvc::getStudent - ' + id);
        parse.retrieve("Student", id,
            function(statusCode, result)
            {
                console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
                res.statusCode = statusCode;
                res.send(result);
            });
    }
    else
    {
        next();
    }
}

/**
 * Create a student.
 *
 * @body    contains the student json object to create
 * @param   req: the http server request object
 * @param   res: the http server response object
 */
exports.createStudent = function(req, res)
{
    console.log("\nstudentSvc::createStudent");
    var form = req.body;
    console.log("created");
    console.log('studentSvc::createStudent form: ' + JSON.stringify(form));

    var student = { name: form.name, grade: form.grade, comment: form.comment };
    console.log(student);

    var issues = validator.validateStudent(student);
    var hasIssues = false;
    for (issue in issues)
    {
        hasIssues = true;
    }

    if (hasIssues)
    {
        console.log('issues: ' + JSON.stringify(issues));
        res.statusCode = 500;
        res.send(issues);
    }
    else
    {
        parse.create("Student", student,
            function(statusCode, result)
            {
                console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
                res.statusCode = statusCode;
                res.send(result);
            });
    }
    // grab individual form fields
    // res.send('firstName is ' + req.body['firstName']);
};

/**
 * Delete a specific student by id
 *
 * @id      id of student to get (req.params.id)
 * @param   req: the http server request object
 * @param   res: the http server response object
 */
exports.deleteStudent = function(req, res)
{
    console.log('\nstudentSvc::deleteStudent');
    var id = req.params.id;

    console.log('studentSvc::deleteStudent - ' + id);
    parse.delete("Student", id,
        function(statusCode, result)
        {
            console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
            res.statusCode = statusCode;
            res.send(result);
        });
}


