var FS = require('../common/fs');
var MD = require('../common/md');

var render = function(view, model, res, next) {
	res.render(view, model, function(err, html) {
		if (err) {
			next(err);
			return;
		}

		res.status(200).send(html);
	});
};

exports.render = render;