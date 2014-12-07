
var path = require('path');
var md = require('../common/md');
var partials = require('../common/partials');

var exp = require('../common/expressExt');

var root = {};

root.home = function(req, res, next) {
	var model = { title: 'Test' };
	
	md.add(model, ['home_message', 'home_points'])
	.then(function(model) {
		return partials.add('root_home_footer', model, res);
	})
	.then(function(model) {
		exp.render('root_home', model, res, next);
	})
}

module.exports = root;
