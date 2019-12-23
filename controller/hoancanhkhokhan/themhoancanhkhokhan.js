var Document = require('../../model/document.js');
var moment = require('moment')
var datetime = new Date();
exports.themhckhokhan = function (req, res) {
    var insert = new Document({
        name: req.body.name,
        address: req.body.address,
        createDate: datetime,
        modifiedDate: datetime,
        numberChild: req.body.numberChild,
        disadvantagedContent: req.body.disadvantagedContent
    });
    insert.save(function (err) {
        if (err) {
            res.json({
                result: 'failed',
                data: {},
                message: 'Không thể thêm'
            })
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
                                conditional: 0
                            })
                        }
                    });
                }
            });
        }
    });
};