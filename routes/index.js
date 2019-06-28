var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: "Login" });
  // var name = req.query.username ;
  // var psd = req.query.password ;
  console.log("hello");
});

module.exports = router;
