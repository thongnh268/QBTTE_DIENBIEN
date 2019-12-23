var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Post = new Schema(
    {
        idAccount: {type: Schema.Types.ObjectId, ref: 'Account', required: true},
        nameAccount : {type:String, required: true, trim: true},
        title: {type:String, required: true, trim: true},
        shortScrifts: {type: String, required: true, trim: true},
        createDate: {type: Date, required: true},
        modifiedDate: {type: Date},
        keyWord : {type: String, required: true, trim: true},
        content: {type: String, required: true, trim: true}
    }
);

module.exports = mongoose.model('Post', Post);