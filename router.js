var express = require('express');
var site = require('./controllers/site.js');
var topic = require('./controllers/topic.js');
var router = express.Router();

router.post('/signup', site.signup);	// 用户注册
router.post('/signin', site.signin);	// 用户登录

router.post('/topic/create', topic.create);	// 发表话题

module.exports = router;
