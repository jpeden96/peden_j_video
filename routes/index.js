var express = require('express');
var router = express.Router();
//var config = require('../config');
var connect = require('../utils/sqlConnect');


router.get('/', function(req, res, next) {
connect.query('SELECT * FROM movies', (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);

      res.render('home', {
        title: 'Movie Player',
        message : "Welcome to my Video Preview App",
        movies : result
      });
    }
  });
  });
module.exports = router;
