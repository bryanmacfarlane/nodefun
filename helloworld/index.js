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

server.start(router.route);
