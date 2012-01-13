/**
 *
 * node.js request router
 *
 * Created : bryan
 * Date    : 1/11/12
 */

function route(handle, pathname, response)
{
    console.log("routing: " + pathname);

    if (typeof handle[pathname] === "function")
    {
        return handle[pathname](response);
    }
    else
    {
        console.log("No request handler found for " + pathname);
        handle["errorNotFound"](response, pathname);
    }
}

exports.route = route;
