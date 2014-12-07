var Q = require('q');

var add = function(view, model, res) {
	var defer = Q.defer();
	
	res.render(view, model, function(err, html) {
		if (err) {
			defer.reject(err);
		}
		else {
			model[view] = html;
			defer.resolve(model);
		}
	});

	return defer.promise;
}
exports.add = add;
