var express = require('express');
var router = express.Router();
//var config = require('../config');
var connect = require('../config');


// do some checking here => check the default user profile
// // ternary statement => MDN ternary
// var toRender = (config.kidsmode) ? 'main_kids' : 'home';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Streamster',
    header : "Streamster",
    message : "For all of your movie needs.",
    mainpage : true
  });
});

module.exports = router;
