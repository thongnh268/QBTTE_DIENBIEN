var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Document = new Schema(
    {
        idAccount: {type: Schema.Types.ObjectId, ref: 'Account', required: true},
        name: {type:String, required: true, trim: true},
        address: {type: String, required: true, trim: true},
        numberChild: {type: Number, required: true},
        status: {type: Boolean, default: false},
        createDate: {type: Date, required: true},
        modifiedDate: {type: Date},
        disadvantagedContent: {type: String, required: true, trim: true}
    }
);

module.exports = mongoose.model('Document', Document);