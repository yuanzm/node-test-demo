var app = require('../app');
var request = require('supertest')(app);
var should = require("should"); 

describe('site/test.js', function() {
    var loginname = 'yuanzm' + Math.random(1);
    var password = 'password';

    describe('sign up', function() {
        it('should not sign up an user when loginname is empty', function(done) {
            request.post('/signup')
            .send({
                loginname: '',
                password: password
            })
            .expect(200, function(err, res) {
                should.not.exist(err);
                res.text.should.containEql('用户名或密码不能为空');
                done();
            });
        });
        it('should sign up an user', function(done) {
            request.post('/signup')
            .send({
                loginname: loginname,
                password: password
            })
            .expect(200, function(err, res) {
                should.not.exist(err);
                res.text.should.containEql('注册成功');
                done();
            });
        });
        it('should not sign up an user when it is exist', function(done) {
            request.post('/signup')
            .send({
                loginname: loginname,
                password: password
            })
            .expect(200, function(err, res) {
                should.not.exist(err);
                res.text.should.containEql('用户已经存在');
                done();
            });
        });
    });

    describe('sign in', function(done) {
        // it('should show ok', function(done) {
        //     request.post('/signin')
        //     .expect(200, function(err, res) {
        //         res.text.should.containEql('ok');
        //         done();
        //     })
        // })
    })
});