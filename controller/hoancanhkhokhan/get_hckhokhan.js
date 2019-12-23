var Document = require('../../model/document.js');

exports.get_hckhokhan = function(req, res){
    Document.findOne({_id : req.params.id}).exec(function (err, data) {
        if (err) {
            res.json({
                result: 'failed',
                data: {},
                message: err
            })
        } else if (!data){
            res.json({
                result: 'failed',
                data: {},
                message: 'Không tìm thấy'
            })
        } else {
            return res.render('./admin/hoancanhkhokhan/edithckhokhan', {
                title: "Chỉnh sửa hoàn cảnh khó khăn",
                data: data,
                conditional: 0
            })
        }
    });
};