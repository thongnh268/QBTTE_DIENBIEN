var express = require('express');
var router = express.Router();

/* GET home page. */
var home = require('../controller/guest/home');
router.get('/', home.home);

router.get('/gioi-thieu', function(req, res, next) {
  res.render('./guest/GioiThieu', { title: 'Giới thiệu' });
});

router.get('/lich-su-hinh-thanh', function(req, res, next) {
  res.render('./guest/LichSuHinhThanh', { title: 'Lịch sử hình thành' });
});

router.get('/chuc-nang-nhiem-vu', function(req, res, next) {
  res.render('./guest/ChucNangNhiemVu', { title: 'Chức năng nhiệm vụ' });
});

router.get('/co-cau-to-chuc', function(req, res, next) {
  res.render('./guest/CoCauToChuc', { title: 'Cơ cấu tổ trức' });
});

router.get('/cac-hoat-dong-ho-tro-tre-em', function(req, res, next) {
  res.render('./guest/HoatDongHoTro', { title: 'Các hoạt động hỗ trợ trẻ em' });
});

// ------------------ GUEST --------------------

// TIN TỨC SỰ KIỆN ------------------------------
var get_all_quyen_song_con = require("../controller/guest/get_all_quyen_song_con")
router.get('/tin-tuc-su-kien/quyen-song-con', get_all_quyen_song_con.get_all_quyen_song_con);
router.get('/tin-tuc-su-kien/quyen-song-con/page/:page', get_all_quyen_song_con.get_all_quyen_song_con);

var get_all_quyen_tham_gia = require("../controller/guest/get_all_quyen_tham_gia")
router.get('/tin-tuc-su-kien/quyen-tham-gia', get_all_quyen_tham_gia.get_all_quyen_tham_gia);
router.get('/tin-tuc-su-kien/quyen-tham-gia/page/:page', get_all_quyen_tham_gia.get_all_quyen_tham_gia);

var get_all_chuong_trinh_khac = require("../controller/guest/get_all_chuong_trinh_khac")
router.get('/tin-tuc-su-kien/cac-chuong-trinh-khac', get_all_chuong_trinh_khac.get_all_chuong_trinh_khac);
router.get('/tin-tuc-su-kien/cac-chuong-trinh-khac/page/:page', get_all_chuong_trinh_khac.get_all_chuong_trinh_khac);

var get_all_quyen_bao_ve = require("../controller/guest/get_all_quyen_bao_ve")
router.get('/tin-tuc-su-kien/quyen-bao-ve', get_all_quyen_bao_ve.get_all_quyen_bao_ve);
router.get('/tin-tuc-su-kien/quyen-bao-ve/page/:page', get_all_quyen_bao_ve.get_all_quyen_bao_ve);

var get_all_quyen_phat_trien = require("../controller/guest/get_all_quyen_phat_trien")
router.get('/tin-tuc-su-kien/quyen-phat-trien', get_all_quyen_phat_trien.get_all_quyen_phat_trien);
router.get('/tin-tuc-su-kien/quyen-phat-trien/page/:page', get_all_quyen_phat_trien.get_all_quyen_phat_trien);

var get_post = require("../controller/guest/get_post")
router.get('/tin-tuc-su-kien/:id', get_post.get_post);

var get_allpost = require("../controller/guest/get_allpost")
router.get('/tin-tuc-su-kien', get_allpost.get_allpost);
router.get('/tin-tuc-su-kien/page/:page', get_allpost.get_allpost);
// -----------------------------------------------

// THÔNG TIN TRẺ EM
var get_all_tre_em_da_duoc_giup = require("../controller/guest/get_all_tre_em_da_duoc_giup")
router.get('/thong-tin-tre-em/tre-em-da-duoc-giup-do', get_all_tre_em_da_duoc_giup.get_all_tre_em_da_duoc_giup);
router.get('/thong-tin-tre-em/tre-em-da-duoc-giup-do/page/:page', get_all_tre_em_da_duoc_giup.get_all_tre_em_da_duoc_giup);

var get_all_tre_em_can_duoc_giup = require("../controller/guest/get_all_tre_em_can_duoc_giup")
router.get('/thong-tin-tre-em/tre-em-can-giup-do', get_all_tre_em_can_duoc_giup.get_all_tre_em_can_duoc_giup);
router.get('/thong-tin-tre-em/tre-em-can-giup-do/page/:page', get_all_tre_em_can_duoc_giup.get_all_tre_em_can_duoc_giup);

var get_document = require("../controller/guest/get_document")
router.get('/thong-tin-tre-em/:id', get_document.get_document);

var get_alldocument = require("../controller/guest/get_alldocument")
router.get('/thong-tin-tre-em', get_alldocument.get_alldocument);
router.get('/thong-tin-tre-em/page/:page', get_alldocument.get_alldocument);

// NHÀ TÀI TRỢ
var get_allsponser = require("../controller/guest/get_allsponsor")
router.get('/nha-tai-tro', get_allsponser.get_allsponser);
router.get('/nha-tai-tro/page/:page', get_allsponser.get_allsponser);

module.exports = router;
