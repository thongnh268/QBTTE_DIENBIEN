var Document = require('../../model/document.js');
var datetime = new Date()
exports.edit_hckhokhan = function (req, res) {
  var set = {
    $set: {
      name: req.body.name,
      address: req.body.address,
      modifiedDate: datetime,
      numberChild: req.body.numberChild,
      disadvantagedContent: req.body.disadvantagedContent
    }
  }
  Document.updateOne({ _id: req.params.id }, set, function (err, exsitings) {
    if (err) {
      console.log(err);
    } else {
      return res.render('./admin/hoancanhkhokhan/edithckhokhan', {
        data: {
          _id: req.params.id,
          name: req.body.name,
          address: req.body.address,
          modifiedDate: datetime,
          numberChild: req.body.numberChild,
          disadvantagedContent: req.body.disadvantagedContent
        },
        title: "Chỉnh sửa hoàn cảnh khó khăn",
        conditional: 1
      });
    };
  });
};