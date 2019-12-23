var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Sponsor = new Schema(
    {
        // idSponsor: mongoose.Types.ObjectId,
        idSponsor: {type:String, required: true, trim: true},
        nameSponsor: {type:String, required: true, trim: true},
        numberBankAccount: {type: String, unique: true, required: true, trim: true},
        createDate: {type: Date, required: true},
        nameBank : {type: String, required: true, trim: true}
    }
);

module.exports = mongoose.model('Sponsor', Sponsor);