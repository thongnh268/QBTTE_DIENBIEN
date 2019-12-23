var test_cms = require('../../model/test_cms.js');

exports.get_chinhsuabaidang = function(req, res){
    test_cms.findOne({_id : req.params.id}).exec(function (err, data) {
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
            return res.render('./admin/post/editpost', {
                title: "Chỉnh sửa bài đăng",
                data: data,
                conditional: 0
            })
        }
    });
};