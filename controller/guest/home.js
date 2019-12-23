var post = require('../../model/post.js');
var document = require('../../model/document.js');
var moment = require('moment')
exports.home = function (req, res) {
    post.find({}).limit(11).sort({ 'createDate': -1 }).exec(function (err1, data) {
        if (err1) {
            res.json({
                result: 'failed',
                data: {},
                message: 'Can\'t find'
            })
        } else {
            var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?(png|jpg)/gi;
            var regex = new RegExp(expression);
            var result = data[0].content.match(regex)
            if (result == null) {
                result = ''
            } else {
                result = Array.from(result)
                result = result[0]
            }
            document.find({ status: false }).limit(3).sort({ 'createDate': -1 }).exec(function (err2, ttte) {
                if (err2) {
                    res.json({
                        result: 'failed',
                        data: {},
                        message: 'Can\'t find'
                    })
                } else {
                    var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?(png|jpg)/gi;
                    var regex = new RegExp(expression);
                    var imagettte = [];
                    for (i = 0; i < ttte.length; i++) {
                        var imgttte = ttte[i].disadvantagedContent.match(regex)
                        if (imgttte == null) {
                            imagettte.push('')
                        } else {
                            imgttte = Array.from(imgttte)
                            imagettte.push(imgttte[0])
                        }
                    }
                    return res.render('./guest/index', {
                        title: 'Trang chủ',
                        data: data,
                        data_ttte: ttte,
                        imagesrc: result,
                        imagettte: imagettte,
                        moment: moment,
                        conditional: 0
                    })
                }
            });
        }
    });
};