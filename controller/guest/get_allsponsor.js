var money = require('../../model/money.js');
var sponsor = require('../../model/sponsor.js');
var moment = require('moment')

exports.get_allsponser = function (req, res) {
    var perPage = 10
    var search = req.query.search
    var page = req.params.page || 1
    if (search === undefined) {
        money.find({}).populate('idSponsor').skip((perPage * page) - perPage).limit(perPage).sort({ 'createDate': -1 }).exec(function (err, moneys) {
            if (err) {
                res.json({
                    result: 'failed',
                    data: {},
                    message: 'khong the insert'
                })
            } else {
                money.count().exec(function (err, count) {
                    if (err) {
                        res.json({
                            result: 'failed',
                            data: {},
                            message: 'khong the insert'
                        })
                    }
                    else {
                        return res.render('./guest/NhaTaiTro', {
                            title: 'Danh sách nhà tài trợ',
                            moneys: moneys,
                            current: page,
                            moment: moment,
                            search: "",
                            pages: Math.ceil(count / perPage),
                            link: "/nha-tai-tro/page"
                        });
                    }
                });
            }
        });
    } else {
        search__ = '?search=' + search
        money.find().populate({ path: 'idSponsor', match: { nameSponsor: { $regex: search, $options: 'i' } } }).sort({ 'createDate': -1 }).exec(function (err, moneys) {
            if (err) {
                res.json({
                    result: 'failed',
                    data: {},
                    message: 'khong the insertdsdsdssd'
                })
            } else {
                var moneyss = []
                var counts = 0
                for (i = 0; i < moneys.length; i++) {
                    if (moneys[i].idSponsor !== null) {
                        counts += 1
                    }
                }
                for (i = (perPage * page) - perPage; i < (perPage * page); i++) {
                    if (i >= moneys.length) {
                        break
                    } else {
                        if (moneys[i].idSponsor !== null) {
                            moneyss.push(moneys[i])
                        }
                    }
                }
                console.log(counts)
                money.count().populate({ path: 'idSponsor', match: { nameSponsor: { $regex: search, $options: 'i' } } }).exec(function (err, count) {
                    if (err) {
                        res.json({
                            result: 'failed',
                            data: {},
                            message: 'khong the insert'
                        })
                    }
                    else {
                        return res.render('./guest/NhaTaiTro', {
                            title: 'Danh sách nhà tài trợ',
                            moneys: moneyss,
                            current: page,
                            moment: moment,
                            search: search__,
                            pages: Math.ceil(counts / perPage),
                            link: "/nha-tai-tro/page"
                        });
                    }
                });
            }
        });
    }
};
