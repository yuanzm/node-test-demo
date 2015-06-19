var express = require('express');
var site = require('./controllers/site.js');
var router = express.Router();

router.post('/signup', site.signup);
router.post('/signin', site.signin);

module.exports = router;
