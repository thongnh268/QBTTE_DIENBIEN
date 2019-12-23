const Account = require('../model/account')
var mongoose = require('mongoose');
var passport = require('passport')
const bcrypt = require('bcrypt');

//Creat new Account
exports.create = (req, res) => {
    //request validation, body-parse để lấy dữ liệu trong form gửi lên server
    if (!req.body) {
        return res.status(400).send({
            message: "Account content can not be empty"
        });
    }
    idAccount = new mongoose.Types.ObjectId();
    console.log(idAccount);


    //Creat a Account
    var account = new Account({
        idAccount: idAccount,
        _id: idAccount,
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        numberPhone: req.body.numberPhone,
        address: req.body.address,
        email: req.body.email

    });

    //Save Account in the DataBase
    account.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong while creating Account."
            });
        });
};
//Retrieve all account Collection from database.
exports.findAll = (req, res) => {
    Account.find()
        .then(accounts => {
            res.send(accounts);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something wrong while retrieving account."
            });
        });
};

//Find a single account with accountID
exports.findOne = (req, res) => {
    Account.findById(req.params.accountID)
        .then(account => {
            if (!account) {
                return res.status(404).send({
                    message: "account not found with id" + req.params.accountID
                });
            }
            res.send(account);
        }).catch(err => {
            if (err.kind === "ObjectID") {
                return res.status(400).send({
                    message: "account not found with id" + req.params.accountID
                });
            }
        });
};

//Find last account 
exports.findLast = (req, res) => {
    Account.findOneAndUpdate()
        .sort({ createdAt: -1 })
        .then(account => {
            if (!account) {
                return res.status(404).send({
                    message: "account not found with id" + req.params.accountID
                });
            }
            res.send(account);
        }).catch(err => {
            if (err.kind === "ObjectID") {
                return res.status(400).send({
                    message: "account not found with id" + req.params.accountID
                });
            }
        });
};



exports.managerAccount = (req, res) => {
    var perPage = 10;
    var page = req.query.page || 1;
    var searchText = {};

    function addKeyValue(obj, key, data) {
        obj[key] = data;
    }
    if (!req.query.search) {
        searchText_ = '&search='
    }
    else {
        addKeyValue(searchText, 'numberPhone', req.query.search)
        console.log(searchText);
        searchText_ = '&search=' + req.query.search
        search = req.query.search
        var re = new RegExp(search, 'i');
        var searchCondition1 = {};
        searchCondition1['username'] = re;
        var searchCondition2 = {};
        searchCondition2['firstName'] = re;
        var searchCondition3 = {};
        searchCondition3['lastName'] = re;
        var searchCondition4 = {};
        searchCondition4['email'] = re;

        searchText = { $or: [searchCondition1, searchCondition2, searchCondition3, searchCondition4] }
    }
    console.log(page);


    console.log(searchText_);
    console.log("okhehwqehqwewh");


    Account.find(searchText)
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .then(account => {

            console.log("chay đến đay");
            Account.find(searchText).count().exec((err, totalResult) => {

                if (page > Math.ceil(totalResult / perPage)) {
                    console.log("Page is to large! - " + "Total pages: " + totalResult.perPage + " - Page navigation: " + page);
                    res.send({ table_account: [] });
                }
                else {
                    console.log(totalResult);

                    res.render('./admin/manager_account', {
                        title: "Quản lý tài khoản",
                        table_account: account,
                        currentPage: page,
                        search: searchText_,
                        totalPages: Math.ceil(totalResult / perPage),
                        conditional: 0
                    });
                }
            })
        }).catch(err => {
            if (err.kind === "ObjectID") {
                return res.status(400).send({
                    message: "Error while searching events"
                });
            }
        });
}

//Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Account.findOneAndDelete({ username: req.params.accountID })
        .then(account => {
            if (!account) {
                return res.status(404).send({
                    message: "account not found eith id " + req.params.accountID
                });
            }
            else {
                console.log("account deleted successfully");
                res.send({
                    message: "account deleted successfully!"
                });
            }
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Could not delete account with id " + req.params.accountID
                });
            }
            return res.status(500).send({
                message: "Could not delete account with id" + req.params.accountID
            });
        });
}

//update a account
exports.update = (req, res) => {
    //validate request

    if (!req.body) {
        return res.status(400).send({
            message: "Event content can not be empty "
        });
    }

    function addKeyValue(obj, key, data) {
        obj[key] = data;
    }

    newvalue = {};
    if (req.body.numberPhone)
        addKeyValue(newvalue, 'numberPhone', req.body.numberPhone);
    if (req.body.email)
        addKeyValue(newvalue, 'email', req.body.email);
    if (req.body.firstName)
        addKeyValue(newvalue, 'firstName', req.body.firstName);
    if (req.body.lastName)
        addKeyValue(newvalue, 'lastName', req.body.lastName);
    if (req.body.role)
        addKeyValue(newvalue, 'role', req.body.role);
    if (req.body.address)
        addKeyValue(newvalue, 'address', req.body.address);

    Account.update(
        { username: req.params.accountID },
        newvalue
    )
        .then(event => {
            if (!event) {
                return res.status(404).send({
                    message: "Không chúa tài khoản: " + req.params.accountID
                });
            }
            console.log(" Update account ");

            res.status(200).send(
                {
                    message: "Cập nhật thành công tài khoản: " + req.params.accountID
                }
            );
        })
        .catch(err => {
            res.status(400).send(err);

        })
}

exports.personalAccount = (req, res, next) => {
    console.log("personalAccount " + JSON.stringify(req.session.passport.user));
    Account.findById(req.session.passport.user._id)
        .then(data => {
            account = {
                username: data.username,
                firstName: data.firstName,
                lastName: data.lastName,
                role: data.role,
                numberPhone: data.numberPhone,
                address: data.address,
                email: data.email
            }
            res.status(200).render('./admin/my_account', {
                title: "Tai khoan ca nhan",
                account: account
            })
        })




}

exports.changePass = (req, res, next) => {
    username = req.session.passport.user.username;
    current_pass = req.body.current_pass;
    new_pass = req.body.new_pass;
    var new_pass_bcrypt;
    new_pass_bcrypt = bcrypt.hashSync(new_pass, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        return hash;
    })
    new_pass = { "password": new_pass_bcrypt }

    Account.findOne({ 'username': username }, function (err, account) {
        // account exists but wrong password, log the error 
        if (!account.validPassword(current_pass)) {
            console.log('Invalid Password');
            return res.status(404).send("Invalid Password");
        }
        // account and password both match, return account from 
        // done method which will be treated like success
        else {
            Account.update({ "username": username }, new_pass, (err, doc) => {
                if (err) {
                    console.log("Something wrong when updating data!");
                }
                else {
                    res.status(200).send("Pass duoc thay doi")
                }
            })
        }
    })
}