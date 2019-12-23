var Document = require('../model/document');
var passport = require('passport')
var datetime = new Date()
var moment = require('moment')
const Money   = require('../model/money')

exports.themhckhokhan = function (req, res) {
    var idAccount = req.session.passport.user._id;
    console.log("Tài khoản đăng hồ sơ:" + idAccount);
    
    var document = new Document({
        idAccount : idAccount,
        name: req.body.name,
        address: req.body.address,
        createDate: datetime,
        modifiedDate: datetime,
        numberChild: req.body.numberChild,
        disadvantagedContent: req.body.disadvantagedContent
    });
    document.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating Document."
        });
    });
};

exports.hoancanhkhokhan = function(req, res){
    var search = req.query.search
    if (search == "undefined") {
        search = ''
    }
    var perPage = 10
    var page = req.params.page || 1
    console.log(search == undefined)
    if (search == undefined) {
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
                        console.log(count);
                        return res.render('./admin/hoancanhkhokhan/hoancanhkhokhan', {
                            title: 'Quản ký hoàn cảnh khó khăn',
                            data: data,
                            moment: moment,
                            current: page,
                            search: search,
                            pages: Math.ceil(count / perPage),
                            conditional: 0
                        })
                    }
                });
            }
        });
    } else {
        search_ = '?search=' + search
        console.log(search)
        Document.find({name: search}).skip((perPage * page) - perPage).limit(perPage).sort({ 'createDate': -1 }).exec(function (err, data) {
            if (err) {
                res.json({
                    result: 'failed',
                    data: {},
                    message: 'khong the insert'
                })
            } else {
                Document.count({name: search}).exec(function (err, count) {
                    if (err) {
                        res.json({
                            result: 'failed',
                            data: {},
                            message: 'khong the insert'
                        })
                    }
                    else {
                        return res.render('./admin/hoancanhkhokhan/hoancanhkhokhan', {
                            title: 'Hoàn cảnh khó khăn',
                            data: data,
                            moment: moment,
                            current: page,
                            search: search_,
                            pages: Math.ceil(count / perPage),
                            conditional: 0
                        })
                    }
                });
            }
        });
    }
};

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

exports.edit_hckhokhan = function (req, res) {
  
  var idAccount = req.session.passport.user._id;
  console.log("Tài khoản chỉnh sửa hồ sơ:" + idAccount);

  var set = {
    $set: {
      idAccount : idAccount,
      name: req.body.name,
      address: req.body.address,
      modifiedDate: datetime,
      numberChild: req.body.numberChild,
      disadvantagedContent: req.body.disadvantagedContent
    }
  }

  Document.update(
    { _id: req.params.id },
    set
)
    .then(document => {
        if (!document) {
            return res.status(404).send({
                message: "Không chúa hồ sơ: " + req.params.id
            });
        }
        console.log(" Update hồ sơ ");

        res.status(200).send(
            {
                message: "Cập nhật thành công hồ sơ: " + req.params.id
            }
        );
    })
    .catch(err => {
        res.status(400).send(err);

    })


};


exports.delete_hckhokhan = function (req, res) {
    Document.findOneAndDelete({ _id: req.params.id })
    .then(disadvantaged => {
        Money.find({'idDocument' : req.params.id}).then(moneys => {
            var i =0
            moneys.forEach(money =>{
                i+=1;
                console.log("hckk i :" + i );
                idDocument = money.idDocument;
                Money.findByIdAndDelete({_id : money._id  }).then(money=> {
                    console.log("Xóa tiền thành công từ hồ sơ có id :" + idDocument); 
                })
            })
        })
        if (!disadvantaged) {
            return res.status(404).send({
                message: "Không tồn tại hồ sơ với id " + req.params.id
            });
        }
        else {
            console.log("Xóa Hồ sơ thành công");
            res.send({
                message: "Xóa Hồ sơ thành công!"
            });
        }
    }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Không thể xóa Hồ sơ  với id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Không thể xóa Hồ sơ  với id" + req.params.id
        });
    });


};


//Retrieve all Sponsor Collection from database.
exports.findAll = (req, res) => {
    Document.find()
        .then(document => {
            res.send(document);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong while retrieving sponsor."
            });
        });
};
