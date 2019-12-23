module.exports = (app) =>{
    var login = require('../controller/login.controller')
    var passport = require("passport");
    
    app.get('/login', (req, res, err) => {    
        if (req.isAuthenticated()){
            console.log("Check /login username : " + req.session.passport.user.username)
            res.redirect('/admin/tai-khoan-ca-nhan')
        }
        else
        res.render('login', { title: 'Express', message: req.flash('loginMessage') })
    });

    //Login
    app.post('/login',
    passport.authenticate("local-login", {
        successRedirect: '/admin/tai-khoan-ca-nhan',
        failureRedirect: '/login',
        failureFlash: true
    })
    );


    //Logout
    app.get('/logout', login.logout);
}