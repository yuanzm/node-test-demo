var app = require('../app');
var request = require('supertest')(app);
var should = require("should");
var support = require("./support/support.js");
var pedding = require('pedding');

describe('site/test.js', function() {
    var title = 'yuanzm';
    var content = 'yuanzimin';

    before(function(done) {
        done = pedding(done, 1);
        support.ready(done);
    });

    describe('topic create', function() {
        it('should not create topic when title is empty', function(done) {
            request.post('/topic/create')
            .set('Cookie', support.normalUserCookie)
            .send({
                title: '',
                content: content
            })
            .expect(200, function(err, res) {
                should.not.exist(err);
                res.text.should.containEql('标题或内容不能为空');
                done();
            });
        });
        it('should create a topic successful', function(done) {
            request.post('/topic/create')
            .set('Cookie', support.normalUserCookie)
            .send({
                title: title,
                content: content
            })
            .expect(200, function(err, res) {
                should.not.exist(err);
                res.text.should.containEql('发表成功');
                done();
            });
        });
    });
});
