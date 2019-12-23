var test_cms = require('../../model/test_cms.js');
var moment = require('moment')
// var fs = require('fs')
var datetime = new Date();
exports.test_cms = function (req, res) {
    var insert = new test_cms({
        title: req.body.title,
        shortScrifts: req.body.shot,
        keyWord: req.body.keyword,
        content: req.body.content
    });
    insert.save(function (err) {
        if (err) {
            res.json({
                result: 'failed',
                data: {},
                message: 'Không thể thêm'
            })
        } else {
            var perPage = 10
            var page = 1
            test_cms.find({}).skip((perPage * page) - perPage).limit(perPage).sort({ 'createDate': -1 }).exec(function (err, data) {
                if (err) {
                    res.json({
                        result: 'failed',
                        data: {},
                        message: 'khong the insert'
                    })
                } else {
                    test_cms.count().exec(function (err, count) {
                        if (err) {
                            res.json({
                                result: 'failed',
                                data: {},
                                message: 'khong the insert'
                            })
                        }
                        else {
                            return res.render('./admin/post/post', {
                                title: 'Quản lý bài đăng',
                                data: data,
                                moment: moment,
                                current: page,
                                search: '',
                                pages: Math.ceil(count / perPage),
                                conditional: 0
                            })
                        }
                    });
                }
            });
        }
    });
};