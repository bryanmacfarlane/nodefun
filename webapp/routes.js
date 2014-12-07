var express = require('express');
var router = express.Router();
var md = require('marked');

var admin = require('./site/admin.js');
var root = require('./site/root.js');

//----------------------------------------------
// Admin
//----------------------------------------------
router.get('/admin', admin.home);
router.get('/admin/test', admin.test);

//----------------------------------------------
// Root
//----------------------------------------------
router.get('/', root.home);

module.exports = router;
