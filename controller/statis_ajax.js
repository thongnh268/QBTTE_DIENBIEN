var Document = require('../model/document');
var Sponsor = require('../model/sponsor');
var Money = require('../model/money');
var moment = require('moment')
exports.statis = function (req, res) {
    Money.find().populate('idSponsor', '_id').sort({ 'createDate': -1 }).exec(function (err, moneys) {
        if (err) {
            res.json({
                result: 'failed',
                data: {},
                message: 'khong the insert'
            })
        } else {
            Sponsor.find().exec(function (err, sponsors) {
                if (err) {
                    res.json({
                        result: 'failed',
                        data: {},
                        message: 'khong the insert'
                    })
                } else {
                    Document.find().select({_id: 0, numberChild: 1, createDate: 1}).sort({ 'createDate': -1 }).exec(function (err, documents) {
                        if (err) {
                            res.json({
                                result: 'failed',
                                data: {},
                                message: 'khong the insert'
                            })
                        }else{
                            total_money = 0
                            number_child = 0
                            number_sponsor = sponsors.length
                            // Lấy tổng số tiền
                            for(i = 0; i < moneys.length; i++){
                                total_money += moneys[i].numberMoney
                            }
                            // Lấy tổng số trẻ em
                            for(i = 0; i < documents.length; i++){
                                number_child += documents[i].numberChild
                            }
                            return res.render('./admin/statistical', {
                                title: 'Thống kê',
                                total_money: total_money,
                                number_child: number_child,
                                number_sponsor: number_sponsor,
                                moneys: moneys,
                                sponsors: sponsors,
                                documents: documents,
                                moment: moment
                            })
                        }
                    });
                }
            });
        }
    });
}