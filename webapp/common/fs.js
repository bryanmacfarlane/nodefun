
// filesytem q promise wrapper

var fs = require('fs'),
	Q = require('q'),
    path = require('path');

exports.readFile = function(path) {
	var defer = Q.defer();
	
	fs.readFile(path, function(err, data) {
		if (err) {
			defer.reject(err);
		}
		else {
			defer.resolve(data);
		}
	});

	return defer.promise;
}