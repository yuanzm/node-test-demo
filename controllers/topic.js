var Topic = require('../proxy/topic.js');
var eventproxy = require('eventproxy');

/*
 * 发表话题
 */
exports.create = function(req, res, next) {
	var title = req.body.title;
	var content = req.body.content;
	var author_id = req.session.user._id;

	var ep = new eventproxy();
	ep.fail(next);

	ep.on('create-err', function(status, errMessage) {
		var data = {
			errCode: status,
			errMessage: errMessage
		}
		res.json(data);
	});

	if ([title, content].some(function(item) {return item === ''})) {
		return ep.emit('create-err', 422, '标题或内容不能为空');
	}

	Topic.newAndSave(title, content, author_id, function(err, topic) {
		if (err) {
			return next(err);
		}
		data = {
			errCode: 200,
			errMessage: '发表成功'
		}
		res.json(data);
	});
}