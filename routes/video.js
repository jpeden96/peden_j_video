var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');

/* GET users listing. */
router.get('/', function(req, res, next) {
connect.query('SELECT * FROM tbl_movies', (err, result) => {
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);

      res.render('home', {
        title: 'Movie Player',
        movies : result
      });
    }
  });
  });

  router.get('/:name', function(req, res, next) {
  connect.query(`SELECT * FROM tbl_movies WHERE movies_trailer='${req.params.name}'`, (err, result) => {
      if (err) {
        throw err; console.log(err);
      } else {
        console.log(result);

        res.render('video', {
          title: 'Streamster - Videos',
          video : result[0]
        });
      }
    });
    });
module.exports = router;
