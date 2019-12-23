var moment = require('moment')
var Post = require('../model/post.js');
var passport = require('passport')
var datetime = new Date()
var Account = require('../model/account')



exports.quanlybaidang = function (req, res) {
    var search = req.query.search
    var perPage = 10
    var page = req.params.page || 1
    console.log(search == undefined)
    if (search == undefined) {
        Post.find({}).skip((perPage * page) - perPage).limit(perPage).sort({ 'createDate': -1 }).exec(function (err, data) {
            if (err) {
                res.json({
                    result: 'failed',
                    data: {},
                    message: 'khong the insert'
                })
            } else {
                Post.count().exec(function (err, count) {
                    if (err) {
                        res.json({
                            result: 'failed',
                            data: {},
                            message: 'khong the insert'
                        })
                    }
                    else {
                        console.log(count);
                        return res.render('./admin/post/post', {
                            title: 'Quản lý bài đăng',
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
        Post.find({keyWord: search}).skip((perPage * page) - perPage).limit(perPage).sort({ 'createDate': -1 }).exec(function (err, data) {
            if (err) {
                res.json({
                    result: 'failed',
                    data: {},
                    message: 'khong the insert'
                })
            } else {
                Post.count({keyWord: search}).exec(function (err, count) {
                    if (err) {
                        res.json({
                            result: 'failed',
                            data: {},
                            message: 'khong the insert'
                        })
                    }
                    else {
                        return res.render('./admin/post/post', {
                            title: 'Quản lý bài đăng',
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


exports.post_chinhsuabaidang = function (req, res) {
  var datetime = new Date()
  var idAccount = req.session.passport.user._id;
  var nameAccount = req.session.passport.user.username;
  console.log("Tài khoản chỉnh sửa Bài đăng:" + idAccount);


  var set = {
    $set: {
            idAccount : idAccount,
            nameAccount : nameAccount,
            title: req.body.title,
            shortScrifts: req.body.shortScrifts,
            modifiedDate: datetime,
            keyWord: req.body.keyWord,
            content: req.body.content
        }
  }
  Post.update(
    { _id: req.params.id },
    set
)
    .then(post => {
        if (!post) {
            return res.status(404).send({
                message: "Không chúa bài đăng: " + req.params.id
            });
        }
        console.log(" Update bài đăng ");

        res.status(200).send(
            {
                message: "Cập nhật thành công bài đăng: " + req.params.id
            }
        );
    })
    .catch(err => {
        res.status(400).send(err);

    })
};


exports.get_chinhsuabaidang = function(req, res){
    Post.findOne({_id : req.params.id}).exec(function (err, data) {
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



exports.delete_baidang = function (req, res) {
    Post.findOneAndDelete({ _id: req.params.id })
    .then(post => {
        if (!post) {
            return res.status(404).send({
                message: "Không tồn tại bài đăng với id : " + req.params.id
            });
        }
        else {
            console.log("Xóa Bài đăng thành công ");
            res.send({
                message: "Xóa Bài đăng thành công !"
            });
        }
    }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Không thể xóa Bài đăng với id  " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Không thể xóa Bài đăng với id " + req.params.id
        });
    });
};


exports.addPost = function (req, res) {
    var idAccount = req.session.passport.user._id;
    var nameAccount = req.session.passport.user.username;
    console.log("Tài khoản đăng bài đăng:" + idAccount);
    
    var post = new Post({
        idAccount : idAccount,
        nameAccount : nameAccount,
        title: req.body.title,
        shortScrifts: req.body.shortScrifts,
        createDate: datetime,
        modifiedDate: datetime,
        keyWord: req.body.keyWord,
        content: req.body.content
    });
    
    
    post.save()
    .then(data => {
        console.log("chạy đến đây");
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating post."
        });
    });
};