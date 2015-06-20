var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var	topicSchema = new Schema({
    title: {type: String},
    content: {type: String},
    author_id: {type: String},
    create_at: {type: Date, default: Date.now}
});

var Topic = mongoose.model('Topic', topicSchema);
