var http = require('http');

var quotes = [{ quote: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
              { quote: "Believe those who are seeking the truth. Doubt those who find it.", author: "André Gide" },
              { quote: "The cure for boredom is curiosity. There is no cure for curiosity.", author: "Ellen Parr" },
              { quote: "What is a highway to one is a disaster to the other.", author: "Mevlana"}];


http.createServer(function (req, res) {
    setTimeout(function () {
        var index;

        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
        index = Math.floor(Math.random() * quotes.length);

        res.end(JSON.stringify(quotes[index]));
    }, 200);
}).listen(8087);


console.log("Quote of the day service running at port 8087.");