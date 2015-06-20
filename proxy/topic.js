var Topic = require('../models').Topic;

/*
 * 新建和保存一个话题
 * @param {String} title: 话题标题
 * @param {String} content: 话题内容
 * @param {Function} callback: 操作之后的回调函数 
 */
exports.newAndSave = function(title, content, author_id, callback) {
    var topic = new Topic();
    topic.title = title;
    topic.content = content;
    topic.author_id = author_id;

    topic.save(callback);
}

