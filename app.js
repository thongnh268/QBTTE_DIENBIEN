var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var expressSession = require('express-session');
var MongoStore = require('connect-mongo')(expressSession);
var flash = require('connect-flash');
var validator = require('express-validator');

//Khai báo routes
var indexRouter = require('./routes/index');
// var accountRouter = require('./routes/account');
var loginRouter = require('./routes/login');
var guestRouter = require('./routes/guest');

// var statistical = require('./routes/statistical');
// var sponsorRouter = require('./routes/sponsor')
var settings = require('./config/settings');
var app = express();

//parser requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


//Connecting to the dataBase
var mongoose = require('mongoose');
// mongoose.set('runValidators': true)
mongoose.connect(settings.hostDB, {
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  'useCreateIndex': true
}).then(() => {
  console.log('Successfully connect to the database');
}).catch(err => {
  console.log('Could not connect to the database. Exitting now ...', err);
  process.exit();
});
var db = mongoose.connection;
//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  //
});



app.use(expressSession({
  secret: settings.secured_key,// chuối bí mật đã mã hóa coookie
  proxy: true,
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));


app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//Add route file here
// require('./routes/account')(app);
require('./routes/login')(app);
// require('./routes/statistical')(app);
// require('./routes/sponsor')(app);
require('./routes/index')(app);

//Esp mongo sử dụng thư viện promise toàn cục
mongoose.Promise = global.Promise;

//Enable CORS for all HTTP methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(validator());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//Router
app.use('/admin', indexRouter);
// app.use('/admin/account', accountRouter)
app.use('/login', loginRouter)
// app.use('/admin/sponsor', sponsorRouter)
// app.use('/admin/statistical', statistical)
app.use('/', guestRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
