var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');

// do some checking here => check the default user profile
// ternary statement => MDN ternary
/* GET home page. */
router.get('/', function(req, res, next) {
  connect.query('SELECT * FROM tbl_movies', (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);

      res.render('adults', {
        layout:'main',
        title: 'Streamster - Adults',
        message : "All Movies",
        mainpage : true,
        movies : result
      });
    }
  });
});

module.exports = router;
