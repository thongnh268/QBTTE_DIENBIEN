var post = require('../../model/post.js');
var moment = require("moment")
exports.get_post = function(req, res){
    post.findOne({_id : req.params.id}).sort({ 'createDate': -1 }).exec(function (err, data) {
        if (err) {
            res.json({
                result: 'failed',
                data: {},
                message: 'Id không tồn tại'
            })
        } else {
            var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?(png|jpg)/gi;
            var regex = new RegExp(expression);
            var result = data.content.match(regex)
            if (result == null) {
                result = ''
            } else {
                result = Array.from(result)
                result = result[0]
            }
            post.find({_id: {$ne : req.params.id}}).limit(5).sort({ 'createDate': -1 }).exec(function (error, relation){
                if (error) {
                    res.json({
                        result: 'failed',
                        data: {},
                        message: 'Id không tồn tại'
                    })
                }else{
                    return res.render('./guest/TinTucChiTiet', {
                        title: 'Tin tức sự kiện',
                        data: data,
                        relation: relation,
                        imagesrc: result,
                        moment: moment
                    })
                }
            })
        }
    });
};