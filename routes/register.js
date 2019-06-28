var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // var name = req.query.username;
    // console.log(name);
    // var psd = req.query.password;
    // console.log(psd);

    res.render('register');
});

module.exports = router;
