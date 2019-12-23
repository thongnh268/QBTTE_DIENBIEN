var post = require('../../model/post.js');
var moment = require('moment')
exports.get_allpost = function (req, res) {
    var perPage = 10
    var search = req.query.search
    var page = req.params.page || 1
    if (search === undefined) {
        post.find({}).skip((perPage * page) - perPage).limit(perPage).sort({ 'createDate': -1 }).exec(function (err, data) {
            if (err) {
                res.json({
                    result: 'failed',
                    data: {},
                    message: 'khong the insert'
                })
            } else {
                post.count().exec(function (err, count) {
                    if (err) {
                        res.json({
                            result: 'failed',
                            data: {},
                            message: 'khong the insert'
                        })
                    }
                    else {
                        var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?(png|jpg)/gi;
                        var regex = new RegExp(expression);
                        var imagesrc = []
                        for (i = 0; i < perPage; i++) {
                            if (i > data.length - 1) {
                                break;
                            }
                            var result = data[i].content.match(regex)
                            if (result == null) {
                                imagesrc.push('')
                            } else {
                                result = Array.from(result)
                                imagesrc.push(result[0])
                            }
                        }
                        return res.render('./guest/TinTucSuKien', {
                            title: 'Tin tức sự kiện',
                            data: data,
                            current: page,
                            imagesrc: imagesrc,
                            search: "",
                            pages: Math.ceil(count / perPage),
                            link: "/tin-tuc-su-kien/page"
                        })
                    }
                });
            }
        });
    } else {
        search__ = '?search=' + search
        post.find({title: {$regex: search, $options: 'i'}}).skip((perPage * page) - perPage).limit(perPage).sort({ 'createDate': -1 }).exec(function (err, data) {
            if (err) {
                res.json({
                    result: 'failed',
                    data: {},
                    message: 'khong the fdsfdsfinsert'
                })
            } else {
                post.count({title: {$regex: search, $options: 'i'}}).exec(function (err, count) {
                    if (err) {
                        res.json({
                            result: 'failed',
                            data: {},
                            message: 'khong thaaaaaa insert'
                        })
                    }
                    else {
                        var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?(png|jpg)/gi;
                        var regex = new RegExp(expression);
                        var imagesrc = []
                        for (i = 0; i < perPage; i++) {
                            if (i > data.length - 1) {
                                break;
                            }
                            var result = data[i].content.match(regex)
                            if (result == null) {
                                imagesrc.push('')
                            } else {
                                result = Array.from(result)
                                imagesrc.push(result[0])
                            }
                        }
                        return res.render('./guest/TinTucSuKien', {
                            title: 'Tin tức sự kiện',
                            data: data,
                            current: page,
                            imagesrc: imagesrc,
                            search: search__,
                            pages: Math.ceil(count / perPage),
                            link: "/tin-tuc-su-kien/page"
                        })
                    }
                });
            }
        });
    }
};