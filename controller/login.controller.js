var LocalStrategy = require('passport-local').Strategy
// var RememberMeStrategy = require('passport-remember-me').Strategy
var flash = require('connect-flash');

var passport = require('passport')
var Account = require('../model/account')

// used to serialize the account for the session
//hàm được gọi khi xác thực thành công để lưu thông tin user vào session
passport.serializeUser(function (account, done) {     
  console.log(account);
    done(null, {
      role : account.role,
      _id : account._id,
      username :account.username
    });
});


// used to deserialize the account
//hàm được gọi bởi passport.session .Giúp ta lấy dữ liệu user dựa vào thông tin lưu trên session và gắn vào req.session.passport.user

  passport.deserializeUser(function (user, done) { 
    Account.findById(user._id, function (err, account) {
        done(err, account);
    });
});
    
passport.use('local-login', new LocalStrategy({
    usernameField: 'username',     //Sử dụng trường nào để xác thực
    passwordFiled: 'password',
    passReqToCallback: true
}, function(req, username, password, done) { 
    console.log("Dữ liệu người dùng nhập :passport username:" + username + " password : " +password);
  
    // check in mongo if a user with username exists or not
    Account.findOne({ 'username' :  username },function(err, account) {
        // In case of any error, return using the done method
        if (err)
          return done(err);
        // Username does not exist, log error & redirect back
        if (!account){
          console.log('account Not Found with username '+username);
          return done(null, false,req.flash('message', 'account Not found.'));                 
        }
        // account exists but wrong password, log the error 
        if (!account.validPassword(password)){
          console.log('Invalid Password');
          return done(null, false, req.flash('message', 'Invalid Password'));
        }
        // account and password both match, return account from 
        // done method which will be treated like success
        return done(null, account);
      }
    );
}));

exports.get_login = (req, res, next) => {
    res.render('login', { title: 'Express', message: req.flash('loginMessage') });
}

exports.logout = (req, res, next) => {
  req.logout();
  res.redirect('/login');
}

exports.isLoggedIn = (req, res, next) => {
  // Nếu một user đã xác thực, cho đi tiếp
  if (req.isAuthenticated()){
      return next(); 
  }
  // Nếu chưa, đưa về login
  else res.status(400).render('./admin/role')
}
exports.isLoggedInRole = (req, res, next) => {
    // Nếu một user đã xác thực, cho đi tiếp
    if (req.isAuthenticated() && 'admin_system' == req.session.passport.user.role){
      console.log("Login với quyền quản trị : " + req.session.passport.user.role);
      return next(); 
  }
  // Nếu chưa, đưa về login
  else res.status(400).send("Bạn cần có quyền quản trị hệ thống")

}
