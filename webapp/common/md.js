// promise wrapper for markdown

var Q = require('q'),
    FS = require('./fs'),
    path = require('path'),
    marked = require('marked');

var markdownPath = path.join('..', 'markdown');
var init = function(rootMarkdownPath) {
	markdownPath = rootMarkdownPath;
}
exports.init = init;

var html = function(contents) {
	var defer = Q.defer();
	
	marked(contents, function(err, data) {
		if (err) {
			defer.reject(err);
		}
		else {
			defer.resolve(data);
		}
	});

	return defer.promise;
}
exports.html = html;

var addMarkdown = function(model, mdName) {
	var mdPath = path.join(markdownPath, mdName + '.md');
	console.log(mdPath);

	return FS.readFile(mdPath)
		.then(function(contents){
			return contents.toString();
		})
		.then(function(mdContents) {
			return html(mdContents);
		})
		.then(function(html) {
			model[mdName] = html;
		})
		.then(function() {
			return model;
		})
};

var add = function(model, mdNames) {
	mdNames = mdNames || [];
	
	result = Q(model); // empty promise
	mdNames.forEach(function(f) {
		result = result.then(function(model) {
			return addMarkdown(model, f);
		});	
	});
	return result;
};
exports.add = add;


