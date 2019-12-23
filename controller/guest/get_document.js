var document = require('../../model/document.js');
var moment = require("moment")
exports.get_document = function(req, res){
    document.findOne({_id : req.params.id}).sort({ 'createDate': -1 }).exec(function (err, data) {
        if (err) {
            res.json({
                result: 'failed',
                data: {},
                message: 'Id không tồn tại'
            })
        } else {
            var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?(png|jpg)/gi;
            var regex = new RegExp(expression);
            var result = data.disadvantagedContent.match(regex)
            if (result == null) {
                result = ''
            } else {
                result = Array.from(result)
                result = result[0]
            }
            document.find({_id: {$ne : req.params.id}}).limit(5).sort({ 'createDate': -1 }).exec(function (error, relation){
                if (error) {
                    res.json({
                        result: 'failed',
                        data: {},
                        message: 'Id không tồn tại'
                    })
                }else{
                    return res.render('./guest/ThongTinTreEmChiTiet', {
                        title: 'Thông tin trẻ em',
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