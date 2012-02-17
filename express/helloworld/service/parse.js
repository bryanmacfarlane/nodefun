/**
 * Parse module
 *
 * User: bryanmac
 * Date: 2/9/12
 */

var rest = require("./rest.js");

var _appId = '';
var _restAPIKey = '';

/**
 * initialize parse with secrets (your appId and restAPIKey)
 *
 * @param appId:  Application Id from Parse
 * @param restAPIKey:  REST API Key from Parse
 */
exports.initialize = function(appId, restAPIKey)
{
    _appId = appId;
    _restAPIKey = restAPIKey;
}

/**
 * Convenience function to create http options for parse.
 * This sets up the url, port and headers while expecting callers to set path and method
 */
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

/**
 * Parse Query:  Querys objects of a className.
 * @param className
 * @param onResults: callback function for results
 */
exports.query = function(className, onResults)
{
    console.log("parse::query");

    var options = getParseOptions();
    options.path = '/1/classes/' + className;

    console.log(options);
    rest.getJSON(options, onResults);
};

/**
 * Parse Retrieve:  Retrieve an object by id.
 * @param className
 * @param itemId to retrieve
 * @param onResults: callback function for results
 */
exports.retrieve = function(className, itemId, onResults)
{
    console.log("parse::query");

    var options = getParseOptions();
    options.path = '/1/classes/' + className + '/' + itemId;

    console.log(options);
    rest.getJSON(options, onResults);
};

/**
 * Parse Create:  Creates an object
 * @param className
 * @param item to create
 * @param onResults: callback function for results
 */
exports.create = function(className, item, onResult)
{
    console.log("parse::create");

    var options = getParseOptions();
    options.method = 'POST';
    options.path = '/1/classes/' + className;

    console.log(options);
    console.log('form data:');
    console.log(item);

    console.log(item);
    rest.postJSON(options, item, onResult);
};

/**
 * Parse Delete:  Deletes an object by id
 * @param className
 * @param itemId to delete
 * @param onResults: callback function for results
 */
exports.delete = function(className, itemId, onResults)
{
    console.log("parse::delete");

    var options = getParseOptions();
    options.method = 'DELETE';
    options.path = '/1/classes/' + className + '/' + itemId;

    console.log(options);
    console.log('data:');
    console.log(itemId);
    rest.deleteJSON(options, itemId, onResults);
};

