var Document = require('../../model/document.js');
var moment = require('moment')
exports.delete_hckhokhan = function (req, res) {
    Document.remove({ _id: req.params.id }).exec(function (err, exsitings) {
        if (err) {
            console.log(err);
        } else {
            var perPage = 10
            var page = 1
            Document.find({}).skip((perPage * page) - perPage).limit(perPage).sort({ 'createDate': -1 }).exec(function (err, data) {
                if (err) {
                    res.json({
                        result: 'failed',
                        data: {},
                        message: 'khong the insert'
                    })
                } else {
                    Document.count().exec(function (err, count) {
                        if (err) {
                            res.json({
                                result: 'failed',
                                data: {},
                                message: 'khong the insert'
                            })
                        }
                        else {
                            return res.render('./admin/hoancanhkhokhan/hoancanhkhokhan', {
                                title: 'Quản lý hoàn cảnh khó khăn',
                                data: data,
                                moment: moment,
                                current: page,
                                search: '',
                                pages: Math.ceil(count / perPage),
                                conditional: 1
                            })
                        }
                    });
                }
            });
        };
    });
};