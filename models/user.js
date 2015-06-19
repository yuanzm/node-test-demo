var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    loginname: {type: String},
    password: {type: String},
    create_at: {type: Date, default: Date.now}
});

userSchema.index({loginname: 1}, {unique: true});
var User = mongoose.model('User', userSchema);
