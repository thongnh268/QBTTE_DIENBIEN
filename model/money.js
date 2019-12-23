var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Money = new Schema(
    {
        idDocument: {type: Schema.Types.ObjectId, ref: 'Document', required: true},
        idSponsor: {type: Schema.Types.ObjectId, ref: 'Sponsor', required: true},
        numberMoney: {type: Number, required: true},
        createDate: {type: Date, required: true}
    }
);

module.exports = mongoose.model('Money', Money);