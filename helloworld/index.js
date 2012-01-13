/**
 *
 * web application starting point
 *
 * Created : bryan
 * Date    : 1/1/12
 */

console.log("starting web application");

// create the server module we created in server.js
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requesthandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/ls"] = requestHandlers.ls;

handle["errorNotFound"] = requestHandlers.errorNotFound;

server.start(router.route, handle);
