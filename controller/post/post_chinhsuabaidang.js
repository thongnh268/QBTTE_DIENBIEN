var test_cms = require('../../model/test_cms.js');

exports.post_chinhsuabaidang = function (req, res) {
  var datetime = new Date()
  var set = {
    $set: {
      title: req.body.title,
      shortScrifts: req.body.shot,
      modifiedDate: datetime,
      keyWord: req.body.keyword,
      content: req.body.content
    }
  }
  test_cms.updateOne({ _id: req.params.id }, set, function (err, exsitings) {
    if (err) {
      console.log(err);
    } else {
      return res.render('./admin/post/editpost', {
        data: {
          _id: req.params.id,
          title: req.body.title,
          shortScrifts: req.body.shot,
          modifiedDate: datetime,
          keyWord: req.body.keyword,
          content: req.body.content
        },
        title: "Chỉnh sửa bài đăng",
        conditional: 1
      });
    };
  });
};