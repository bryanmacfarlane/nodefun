
// load http module
var http = require('http');

var s = http.createServer(function(req, res) {
            // console.log("request: ", req.url);
            res.writeHead(200, { 'content-type': 'text/plain' });            
            res.write("hello\n");

            // simulate non-block I/O.  Node goes idle
            setTimeout(function() {
                res.end("world\n");
            }, 2000);
        });

s.listen(8000);
console.log("server started on port " + s.address().port);


// curl -i http://bryanmacDev:8000
// ab -n 100 -c 100 http://127.0.0.1:8000/                   