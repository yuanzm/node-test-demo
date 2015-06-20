var mongoose = require('mongoose');
var config = require('../config.js');

var connection_string = config.dbprefix + config.dbhost + '/' + config.dbname;

// 数据库连接
mongoose.connect(connection_string, function(err) {
    if (err) {
        console.log('connect to %s error', connection_string, err.message);
    }
});

require('./user.js');
require('./topic.js')

exports.User = mongoose.model('User');
exports.Topic = mongoose.model('Topic');
