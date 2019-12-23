var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var test_cms = new Schema(
    {
        idAccount: {type: Schema.Types.ObjectId, ref: 'Account', required: true},
        title: {type:String, require: true, trim: true},
        shortScrifts: {type: String, require: true, trim: true},
        createDate: {type: Date, default: Date.now},
        modifiedDate: {type: Date, default: Date.now},
        keyWord : {type: String, require: true, trim: true},
        content: {type: String, require: true, trim: true}
    }
);

module.exports = mongoose.model('test_cms', test_cms);