
var exec = require("child_process").exec;

function upload(response)
{
    console.log("->->->->->->->->");
    console.log("upload called");
    writeText(response, 200, "Upload Called.");
}

function start(response)
{
    console.log("->->->->->->->->");
    console.log("start called");

    var obj =
    {
        foo: "bar",
        baz: "bat"
    };

    obj.baz = "updated";

    returnObject(response, obj);
}

function ls(response)
{
    exec("ls -la",
            {timeout:1000, maxBuffer:2000*1024},
            function (error, stdout, stderr)
            {
                writeText(response, 200, stdout);
            }
        );
}

function errorNotFound(response, path)
{
    writeText(response, 404, "404 not found:" + path);
}

//------------------------------------------------
// Private
//------------------------------------------------
function returnObject(response, obj)
{
    writeText(response, 200, JSON.stringify(obj));
}

function writeText(response, httpCode, output)
{
    response.writeHead(httpCode, {"Content-Type": "text/plain"});
    response.write(output);
    response.end();
}

exports.upload = upload;
exports.start = start;
exports.ls = ls;
exports.errorNotFound = errorNotFound;