var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');

// do some checking here => check the default user profile
// ternary statement => MDN ternary
/* GET home page. */
router.get('/', function(req, res, next) {
  connect.query("SELECT * FROM tbl_movies, tbl_genre, tbl_mov_genre WHERE tbl_mov_genre.movies_id = tbl_movies.movies_id AND tbl_mov_genre.genre_id = tbl_genre.genre_id AND tbl_genre.genre_name = 'family'", (err, result) => { //need to change this query
    if (err) {
      throw err; console.log(err);
    } else {
      console.log(result);

      res.render('kids', {
        title: 'Streamster - Kids',
        layout:'kidslayout',
        message : "Kids Zone!",
        mainpage : true,
        movies : result
      });
    }
  });
});

module.exports = router;
