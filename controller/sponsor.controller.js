const Sponsor = require('../model/sponsor')
const Money   = require('../model/money')
const Account = require('../model/account')
const Document = require('../model/document')
var mongoose = require('mongoose');
var passport = require('passport')


//Creat new Sponsor
exports.create = (req, res) => {
    console.log("*******Sponsor*******");
    //request validation, body-parse để lấy dữ liệu trong form gửi lên server
    if (!req.body) {
        return res.status(400).send({
            message: "Sponsor content can not be empty"
        });
    }
    idSponsor = new mongoose.Types.ObjectId();
    // console.log(idSponsor);
    var datetime = new Date()
    //Creat a Sponsor
    var sponsor = new Sponsor({
        idSponsor :  idSponsor,
        _id: idSponsor,
        nameSponsor :   req.body.nameSponsor,
        numberBankAccount : req.body.numberBankAccount,
        createDate: datetime,
        nameBank :req.body.nameBank
    });

    //Save Sponsor in the DataBase
    sponsor.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong while creating Sponsor."
            });
        });
};

//Retrieve all Sponsor Collection from database.
exports.findAll = (req, res) => {
    Sponsor.find()
        .then(sponsors => {
            res.send(sponsors);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong while retrieving sponsor."
            });
        });
};

//Find a single sponsor with sponsorID
exports.findOne = (req, res) => {
    Sponsor.findById(req.params.sponsorID)
        .then(sponsor => {
            if (!sponsor) {
                return res.status(404).send({
                    message: "sponsor not found with id" + req.params.sponsorID
                });
            }
            res.send(sponsor);
        }).catch(err => {
            if (err.kind === "ObjectID") {
                return res.status(400).send({
                    message: "sponsor not found with id" + req.params.sponsorID
                });
            }
        });
};

//Find last sponsor 
exports.findLast = (req, res) => {
    Sponsor.findOneAndUpdate()
        .sort({ createdAt: -1 })
        .then(sponsor => {
            if (!sponsor) {
                return res.status(404).send({
                    message: "sponsor not found with id" + req.params.sponsorID
                });
            }
            res.send(sponsor);
        }).catch(err => {
            if (err.kind === "ObjectID") {
                return res.status(400).send({
                    message: "sponsor not found with id" + req.params.sponsorID
                });
            }
        });
};



exports.managerSponsor = (req, res, err) => {
    var perPage = 10;
    var page = req.query.page || 1;
    var searchText ={};

    function addKeyValue(obj, key, data){
        obj[key] = data;
      }
    if(!req.query.search){
        searchText_ = '&search='
    }
    else{
        addKeyValue(searchText, 'numberBankAccount',req.query.search)
        console.log(searchText);
        searchText_ = '&search=' + req.query.search
        search = req.query.search
        console.log(typeof(search));
        var re = new RegExp(search, 'i');
        var searchCondition2 = {};
        searchCondition2['nameSponsor'] = re;
        var searchCondition4 = {};
        searchCondition4['nameBank'] = re;
        searchText = { $or: [searchCondition2, searchCondition4] }
    }
    console.log(page);
 
    
    console.log(searchText_);
    console.log("ok");
    

    Sponsor.find(searchText)
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .sort({ 'createDate': -1 })
        .then( sponsor => {
            console.log("chay chính xác đến đay");
            Sponsor.find(searchText).count().exec( (err, totalResult) => {
                    console.log(totalResult);
                    
                    res.render('./admin/manager_sponsor',{
                        title : "Quản lý nhà tài trợ",
                        table_account: sponsor,
                        currentPage: page,
                        search: searchText_,
                        totalPages: Math.ceil(totalResult / perPage),
                        conditional : 0
                    });
                
            })
        }).catch(err => {
                            if (err.kind === "ObjectID") {
                                return res.status(400).send({
                                    message: "Error while searching events"
                                });
                            }
                        });
}

//Xóa NHÀ TÀI TRỢ THÌ XÓA TIỀN LUÔN
exports.delete = (req, res) => {
    Sponsor.findOneAndDelete({ _id : req.params.sponsorID })
        .then(sponsor => {
            console.log("nha tai tro : " + req.params.sponsorID);
            Money.find({'idSponsor' : req.params.sponsorID}).then(moneys => {
                var i =0
                moneys.forEach(money =>{
                    i+=1;
                    console.log("i:" + i );
                    idSponsor = money.idSponsor;
                    Money.findByIdAndDelete({_id : money._id  }).then(money=> {
                        console.log("Xóa tiền thành công từ nhà tài trợ có id :" + idSponsor); 
                    })
                })
            })
            if (!sponsor) {
                return res.status(404).send({
                    message: "sponsor not found eith id " + req.params.sponsorID
                });
            }
            else{
                console.log("Xóa nhà tài trợ thành công");  
                res.send({
                    message: "Xóa nhà tài trợ thành công!"
                });
            }
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Could not delete sponsor with id " + req.params.sponsorID
                });
            }
            return res.status(500).send({
                message: "Could not delete sponsor with id" + req.params.sponsorID
            });
        });
};

        //update a sponsor
exports.update = (req, res,next) => {
    //validate request
    
    if (!req.body ) {
        return res.status(400).send({
            message: "Even content can not be empty "
        });
    }

    function addKeyValue(obj, key, data){
        obj[key] = data;
      }
      
    newvalue = {};
    if(req.body.nameSponsor) 
    addKeyValue(newvalue, 'nameSponsor', req.body.nameSponsor);
    if(req.body.numberBankAccount) 
    addKeyValue(newvalue, 'numberBankAccount', req.body.numberBankAccount);
    if(req.body.nameBank) 
    addKeyValue(newvalue, 'nameBank', req.body.nameBank);

    Sponsor.findOneAndUpdate(
        {_id : req.params.sponsorID},
        newvalue
        )
        .then(event => {
            if (!event) {
                return res.status(404).send({
                    message: "Không chúa nhà tài trợ: " + req.params.sponsorID
                });
            }
            console.log(" Update sponsor req.params.sponsorID ");
            
            res.status(200).send(
                {
                    message: "Cập nhật thành công nhà tài trợ: " + req.params.sponsorID
                }
            );
        })
        .catch(err => {
            res.status(400).send(err);
            
        })
};


exports.money = (req, res) => {
    var datetime = new Date()
    idSponsor = req.body.idSponsor;
    numberMoney = req.body.numberMoney;
    idDocument = req.body.idDocument;
    idAccount = req.session.passport.user._id;

    var idAccount = req.session.passport.user._id;
    console.log("Tài khoản chỉnh sửa hồ sơ:" + idAccount);
    var set = {
      $set: {
        status : true
      }
    }
    Document.update( { _id: idDocument }, set ).catch(err => {res.status(400).send(err); })

    console.log("*******Money*******");
    var datetime = new Date()
    //Creat a Sponsor
    var money = new Money({
        idAccount : idAccount,
        idSponsor :  idSponsor,
        numberMoney: numberMoney,
        idDocument :   idDocument,
        createDate: datetime
    });

    //Save Sponsor in the DataBase
    money.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong while creating Sponsor."
            });
        });

}