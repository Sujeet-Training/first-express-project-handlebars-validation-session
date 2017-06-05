var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sign Up to Tiffin Box', success: req.session.success, errors: req.session.errors });
  req.session.errors=null;
});

router.post('/submit', function(req, res, next){
  req.check('email','Entered E-mail is not valid').isEmail();
  req.check('password','Entered password is not valid').isLength({min: 4}).equals(req.body.confirmPassword);
  var errors = req.validationErrors();
  if (errors){
    req.session.errors = errors;
    req.session.success = false;
  } else {
    req.session.success = true;
  }
  res.redirect('/');
});

router.get('/test/:id', function(req, res, next){
    res.render('test', {title: 'Sujeet', output: req.params.id});
});

module.exports = router;
