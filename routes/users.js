var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Users-Sujeet', condition: true, anyArray:[0,1,2,3,4,5,6,7]});
  // res.send('respond with a resource for users');
});

module.exports = router;
