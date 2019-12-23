var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var Account = new Schema(
    {
        idAccount: mongoose.Types.ObjectId,
        username: { type: String, unique: true, required: true, trim: true },
        password: { type: String, required: true, trim: true },
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true, trim: true },
        role: { type: String, enum: ["admin_system", "admin_center"], default: "admin_center" },
        numberPhone: { type: Number, required: true },
        address: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true }
    }
);


//hashing a password before saving it to the database
Account.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
            console.log("notok");

            return next(err);
        }
        console.log("ok");
        console.log(hash);

        user.password = hash;
        next();
    })
});
// Kiểm tra password hợp lệ không
Account.methods.validPassword = function (password) {
    var user = this;

    console.log("Pare pass " + bcrypt.compareSync(password, user.password));

    return bcrypt.compareSync(password, user.password);   //pareSync là cần thiết để pare passwword
};

// Pre hook for `findOneAndUpdate`
Account.pre('findOneAndUpdate', function (next) {
    this.options.runValidators = true;
    next();
});


module.exports = mongoose.model('Account', Account);
