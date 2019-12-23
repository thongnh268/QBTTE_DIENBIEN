var post = require('../../model/post.js');
var moment = require('moment')
exports.get_all_quyen_phat_trien = function (req, res) {
    var perPage = 10
    var page = req.params.page || 1
    post.find({keyWord: "Quyền phát triển"}).skip((perPage * page) - perPage).limit(perPage).sort({ 'createDate': -1 }).exec(function (err, data) {
        if (err) {
            res.json({
                result: 'failed',
                data: {},
                message: 'khong the tìm'
            })
        } else {
            post.count({keyWord: "Quyền phát triển"}).exec(function (err, count) {
                if (err) {
                    res.json({
                        result: 'failed',
                        data: {},
                        message: 'khong the đếm'
                    })
                }
                else {
                    var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?(png|jpg)/gi;
                    var regex = new RegExp(expression);
                    var imagesrc = []
                    for (i = 0; i < perPage; i++) {
                        if (i > data.length - 1){
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
                        title: 'Quyền phát triển',
                        data: data,
                        current: page,
                        imagesrc: imagesrc,
                        search: "",
                        pages: Math.ceil(count / perPage),
                        link: "/tin-tuc-su-kien/quyen-phat-trien/page"
                    })
                }
            });
        }
    });
};