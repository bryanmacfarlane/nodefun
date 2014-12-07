
var admin = {};

/* GET admin page. */
admin.home = function(req, res) {
  res.render('admin_home', { title: 'Admin Site Template' });
};

admin.test = function(req, res) {
	res.render('admin_test', { title: 'Admin Site Template: test2' });
};

module.exports = admin;
