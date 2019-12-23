var document = require('../../model/document.js');
exports.get_alldocument = function (req, res) {
    var perPage = 10
    var search = req.query.search
    var page = req.params.page || 1
    if (search === undefined) {
        document.find({}).skip((perPage * page) - perPage).limit(perPage).sort({ 'createDate': -1 }).exec(function (err, data) {
            if (err) {
                res.json({
                    result: 'failed',
                    data: {},
                    message: 'khong the insert'
                })
            } else {
                document.count().exec(function (err, count) {
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
                            var result = data[i].disadvantagedContent.match(regex)
                            if (result == null) {
                                imagesrc.push('')
                            } else {
                                result = Array.from(result)
                                imagesrc.push(result[0])
                            }
                        }
                        return res.render('./guest/ThongTinTreEm', {
                            title: 'Thông tin trẻ em',
                            data: data,
                            current: page,
                            imagesrc: imagesrc,
                            search: "",
                            pages: Math.ceil(count / perPage),
                            link: "/thong-tin-tre-em/page"
                        })
                    }
                });
            }
        });
    } else {
        search__ = '?search=' + search
        document.find({name: {$regex: search, $options: 'i'}}).skip((perPage * page) - perPage).limit(perPage).sort({ 'createDate': -1 }).exec(function (err, data) {
            if (err) {
                res.json({
                    result: 'failed',
                    data: {},
                    message: 'khong the insert'
                })
            } else {
                document.count({name: {$regex: search, $options: 'i'}}).exec(function (err, count) {
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
                            var result = data[i].disadvantagedContent.match(regex)
                            if (result == null) {
                                imagesrc.push('')
                            } else {
                                result = Array.from(result)
                                imagesrc.push(result[0])
                            }
                        }
                        return res.render('./guest/ThongTinTreEm', {
                            title: 'Thông tin trẻ em',
                            data: data,
                            current: page,
                            imagesrc: imagesrc,
                            search: search__,
                            pages: Math.ceil(count / perPage),
                            link: "/thong-tin-tre-em/page"
                        })
                    }
                });
            }
        });
    }
};