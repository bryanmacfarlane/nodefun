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

var getParseOptions = function()
{
    var options = {
        host: 'api.parse.com',
        port: 443,
        path: '',
        method: 'GET',
        headers: {
            'X-Parse-Application-Id': _appId,
            'X-Parse-REST-API-Key': _restAPIKey,
            'Content-Type': 'application/json'
        }
    };

    return options;
}

exports.query = function(className, onResults)
{
    console.log("parse::query");

    var options = getParseOptions();
    options.path = '/1/classes/Student';

    console.log(options);
    rest.getJSON(options, onResults);
};

exports.retrieve = function(className, itemId, onResults)
{
    console.log("parse::query");

    var options = getParseOptions();
    options.path = '/1/classes/Student/' + itemId;

    console.log(options);
    rest.getJSON(options, onResults);
};

exports.create = function(className, item, onResults)
{
    console.log("parse::create");

    var options = getParseOptions();
    options.method = 'POST';
    options.path = '/1/classes/Student';

    console.log(options);
    console.log('data:');
    console.log(item);
    rest.postJSON(options, item, onResults);
};

exports.delete = function(className, itemId, onResults)
{
    console.log("parse::delete");

    var options = getParseOptions();
    options.method = 'DELETE';
    options.path = '/1/classes/Student/' + itemId;

    console.log(options);
    console.log('data:');
    console.log(itemId);
    rest.deleteJSON(options, itemId, onResults);
};

