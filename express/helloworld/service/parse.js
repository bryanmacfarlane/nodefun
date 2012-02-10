/**
 * Parse module
 *
 * User: bryanmac
 * Date: 2/9/12
 */

var rest = require("./rest.js");

var _appId = '';
var _restAPIKey = '';
exports.initialize = function(appId, restAPIKey)
{
    _appId = appId;
    _restAPIKey = restAPIKey;
}

exports.query = function(className, onResults)
{
    console.log("parse::query");

    var options = {
        host: 'api.parse.com',
        port: 443,
        path: '/1/classes/Student',
        method: 'GET',
        headers: {
            'X-Parse-Application-Id': _appId,
            'X-Parse-REST-API-Key': _restAPIKey,
            'Content-Type': 'application/json'
        }
    };

    console.log(options);
    rest.getJSON(options, onResults);
};

exports.retrieve = function(className, itemId, onResults)
{
    console.log("parse::query");

    var options = {
        host: 'api.parse.com',
        port: 443,
        path: '/1/classes/Student/' + itemId,
        method: 'GET',
        headers: {
            'X-Parse-Application-Id': _appId,
            'X-Parse-REST-API-Key': _restAPIKey,
            'Content-Type': 'application/json'
        }
    };

    console.log(options);
    rest.getJSON(options, onResults);
};

