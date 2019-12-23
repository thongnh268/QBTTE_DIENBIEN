var hoancanhkhokhan = require('../../model/document.js');
var moment = require('moment')

exports.hoancanhkhokhan = function(req, res){
    var search = req.query.search
    if (search == "undefined") {
        search = ''
    }
    var perPage = 10
    var page = req.params.page || 1
    console.log(search == undefined)
    if (search == undefined) {
        hoancanhkhokhan.find({}).skip((perPage * page) - perPage).limit(perPage).sort({ 'createDate': -1 }).exec(function (err, data) {
            if (err) {
                res.json({
                    result: 'failed',
                    data: {},
                    message: 'khong the insert'
                })
            } else {
                hoancanhkhokhan.count().exec(function (err, count) {
                    if (err) {
                        res.json({
                            result: 'failed',
                            data: {},
                            message: 'khong the insert'
                        })
                    }
                    else {
                        console.log(count);
                        return res.render('./admin/hoancanhkhokhan/hoancanhkhokhan', {
                            title: 'Quản ký hoàn cảnh khó khăn',
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
        console.log(search)
        hoancanhkhokhan.find({name: search}).skip((perPage * page) - perPage).limit(perPage).sort({ 'createDate': -1 }).exec(function (err, data) {
            if (err) {
                res.json({
                    result: 'failed',
                    data: {},
                    message: 'khong the insert'
                })
            } else {
                hoancanhkhokhan.count({name: search}).exec(function (err, count) {
                    if (err) {
                        res.json({
                            result: 'failed',
                            data: {},
                            message: 'khong the insert'
                        })
                    }
                    else {
                        return res.render('./admin/hoancanhkhokhan/hoancanhkhokhan', {
                            title: 'Hoàn cảnh khó khăn',
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