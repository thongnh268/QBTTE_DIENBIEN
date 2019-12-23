module.exports = (app) =>{

 //-----------------Khai báo biến--------------
var express = require('express');
var passport = require("passport");
var auth = require('../controller/login.controller')
var account = require('../controller/account.controller');
var sponsor = require('../controller/sponsor.controller');
var statistical = require("../controller/statis");
var statistical_ajax = require("../controller/statis_ajax");
var disadvantaged = require('../controller/disadvantaged')
var post = require('../controller/post.controller')
app.use('/admin', auth.isLoggedIn)


// ----------------- Quản lý bài đăng -------------------

// GET Bài đăng để chỉnh sửa
app.get('/admin/chinh-sua-bai-dang/:id', post.get_chinhsuabaidang);

// POST Cập nhật bài viết
app.post('/admin/chinh-sua-bai-dang/:id', post.post_chinhsuabaidang);

// POST Thêm bài đăng
app.post('/admin/them-bai-dang',post.addPost);

// GET Lấy tất cả bài đăng
app.get('/admin/quan-ly-bai-dang/:page', post.quanlybaidang)
app.get('/admin/quan-ly-bai-dang', post.quanlybaidang)

// POST Xóa bài đăng
app.delete('/admin/xoa-bai-dang/:id', post.delete_baidang)

// GET Thêm bài đăng
app.get('/admin/them-bai-dang', function(req, res, next) {
  res.render('./admin/post/addpost', { title: 'Thêm bài đăng' });
});


// ----------------------Hoàn cảnh khó khăn----------------------

// GET hoàn cảnh khó khăn để chỉnh sửa
app.get('/admin/chinh-sua-hoan-canh-kho-khan/:id', disadvantaged.get_hckhokhan);

// POST Cập nhật hoàn cảnh khó khăn
app.post('/admin/chinh-sua-hoan-canh-kho-khan/:id', disadvantaged.edit_hckhokhan);

//  POST thêm hoàn cảnh khó khăn
app.post('/admin/them-hoan-canh-kho-khan', disadvantaged.themhckhokhan);

// GET Hoàn cảnh khó khăn
app.get('/admin/hoan-canh-kho-khan/find-list', disadvantaged.findAll);

app.get('/admin/quan-ly-hoan-canh-kho-khan/:page', disadvantaged.hoancanhkhokhan);
app.get('/admin/quan-ly-hoan-canh-kho-khan', disadvantaged.hoancanhkhokhan);

// POST Xóa hoàn cảnh khó khăn
app.delete('/admin/xoa-hoan-canh-kho-khan/:id', disadvantaged.delete_hckhokhan);

// GET thêm hoàn cảnh khó khăn
app.get('/admin/them-hoan-canh-kho-khan', function(req, res, next) {
  res.render('./admin/hoancanhkhokhan/themhckhokhan', { title: 'Thêm hoàn cảnh khó khăn' });
});



// ----------------------Tài Khoản----------------------


app.get('/admin/quan-ly-tai-khoan', auth.isLoggedInRole, account.managerAccount)
app.get('/admin/quan-ly-tai-khoan/:page', auth.isLoggedInRole, account.managerAccount)
app.post('/admin/account', auth.isLoggedInRole, account.create)
app.delete('/admin/account/:accountID', auth.isLoggedInRole, account.delete);


app.put('/admin/account/:accountID', account.update);
app.post('/admin/changepass',account.changePass);

//XỬ LÝ ĐỐI VỚI TÀI KHOẢN ADMIN CHO TỪNG TRƯỜNG HỢP HIỂN THỊ 
app.get("/admin/tai-khoan-ca-nhan", account.personalAccount)





//-------------------------Nhà tài trợ----------------------------


app.get('/admin/quan-ly-nha-tai-tro', sponsor.managerSponsor)
app.post('/admin/sponsor', sponsor.create)
app.delete('/admin/sponsor/:sponsorID', sponsor.delete);
app.put('/admin/sponsor/:sponsorID', sponsor.update);



//------------------------Thống kê---------------------------------

app.get("/admin/statistical",auth.isLoggedInRole, statistical.statis);
// app.get("/admin/statistical",auth.isLoggedIn, statistical_ajax.statis);


//------------------------ADD Money ----------------------------
app.post("/admin/addmoney", sponsor.money );

} 
