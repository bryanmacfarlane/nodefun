var http = require('http');

http.createServer(function (req, res) {
    getQuote(function (quote) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(formatString("A quote from <b>{0}</b><br><h2>{1}</h2>", quote.author, quote.quote));
    }, function (error) {
        res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
        res.end(JSON.stringify(error));
    });
}).listen(8088);

var quoteServiceRequestOptions = {
    host: "localhost",
    port: 8087,
    method: "GET",
    agent: false
};

function getQuote(onQuote, onError) {
    var request = http.request(quoteServiceRequestOptions, function (response) {
        var data = [];
        response.setEncoding("utf8");

        response.on("data", function (chunk) {
            data.push(chunk);
        });

        response.on("end", function () {
            try {
                onQuote(JSON.parse(data.join("")));
            } catch (error) {
                onError(error);
            }
        });
    });

    request.on("error", onError);
    request.end();

    return request;
}

function formatString(format) {
    var args = arguments;

    if (format) {
        return format.replace(/{(\d+)}/g, function (match, number) {
            return args[+number + 1];
        });
    } else {
        return format;
    }
}


console.log("Node quote of the day server running at port 8088.");