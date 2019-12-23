var test_cms = require('../../model/test_cms.js');
var moment = require('moment')
exports.quanlybaidang = function (req, res) {
    var search = req.query.search
    var perPage = 10
    var page = req.params.page || 1
    if (search == undefined) {
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
                            search: search,
                            pages: Math.ceil(count / perPage),
                            conditional: 0
                        })
                    }
                });
            }
        });
    } else {
        search_ = '?search=' + search
        test_cms.find({keyWord: search}).skip((perPage * page) - perPage).limit(perPage).sort({ 'createDate': -1 }).exec(function (err, data) {
            if (err) {
                res.json({
                    result: 'failed',
                    data: {},
                    message: 'khong the insert'
                })
            } else {
                test_cms.count({keyWord: search}).exec(function (err, count) {
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
                            search: search_,
                            pages: Math.ceil(count / perPage),
                            conditional: 0
                        })
                    }
                });
            }
        });
    }
};