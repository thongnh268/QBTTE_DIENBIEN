/***************************************************************************************************************
COMMON FUNCTION
/***************************************************************************************************************/
function tndate(selector) {
    jQuery(selector).datepicker({
        changeMonth: true,
        yearRange: '-70:+5',
        changeYear: true,
        dateFormat: 'dd/mm/yy',
        showOn: 'button',
        buttonImage: "/icons/83.png",
        buttonImageOnly: true,
        buttonText: 'Chọn ngày tháng'
    });
}

function tndatetime(selector) {
    jQuery(selector).datetimepicker({
        changeMonth: true,
        yearRange: '-70:+5',
        changeYear: true,
        dateFormat: 'dd/mm/yy',
        timeFormat: 'hh:mm',
        showOn: 'button',
        buttonImage: "/icons/83.png",
        buttonImageOnly: true,
        buttonText: 'Chọn ngày tháng'
    });
}
function tndate_custom(selector, df) {
    $(selector).datepicker({
        changeMonth: true,
        yearRange: '-70:+5',
        changeYear: true,
        dateFormat: df,
        showOn: 'button',
        buttonImage: "/icons/83.png",
        buttonImageOnly: true,
        buttonText: 'Chọn ngày tháng'
    });
}
/***************************************************************************************************************
END COMMON FUNCTION
/***************************************************************************************************************/


/***************************************************************************************************************
                            VIỆT HÓA DATE PICKER 
/***************************************************************************************************************/
/* Vietnamese initialisation for the jQuery UI date picker plugin. */
/* Translated by Le Thanh Huy (lthanhhuy@cit.ctu.edu.vn). */
jQuery(function($) {
    $.datepicker.regional['vi'] = {
        closeText: 'Đóng',
        prevText: '&#x3c;Trước',
        nextText: 'Tiếp&#x3e;',
        currentText: 'Hôm nay',
        monthNames: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu',
		'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'],
        monthNamesShort: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
		'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        dayNames: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
        dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        dayNamesMin: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        weekHeader: 'Tu',
        dateFormat: 'dd/mm/yy',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['vi']);
});
/***************************************************************************************************************
                                            END VIỆT HÓA DATE PICKER 
/***************************************************************************************************************/


/***************************************************************************************************************
                                            FANCY BOX
/***************************************************************************************************************/
/*
* FancyBox - jQuery Plugin
* Simple and fancy lightbox alternative
*
* Examples and documentation at: http://fancybox.net
* 
* Copyright (c) 2008 - 2010 Janis Skarnelis
* That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
* 
* Version: 1.3.4 (11/11/2010)
* Requires: jQuery v1.3+
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*/

; (function(b) {
    var m, t, u, f, D, j, E, n, z, A, q = 0, e = {}, o = [], p = 0, d = {}, l = [], G = null, v = new Image, J = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, W = /[^\.]\.(swf)\s*$/i, K, L = 1, y = 0, s = "", r, i, h = false, B = b.extend(b("<div/>")[0], { prop: 0 }), M = b.browser.msie && b.browser.version < 7 && !window.XMLHttpRequest, N = function() { t.hide(); v.onerror = v.onload = null; G && G.abort(); m.empty() }, O = function() {
        if (false === e.onError(o, q, e)) { t.hide(); h = false } else {
            e.titleShow = false; e.width = "auto"; e.height = "auto"; m.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
            F()
        } 
    }, I = function() {
        var a = o[q], c, g, k, C, P, w; N(); e = b.extend({}, b.fn.fancybox.defaults, typeof b(a).data("fancybox") == "undefined" ? e : b(a).data("fancybox")); w = e.onStart(o, q, e); if (w === false) h = false; else {
            if (typeof w == "object") e = b.extend(e, w); k = e.title || (a.nodeName ? b(a).attr("title") : a.title) || ""; if (a.nodeName && !e.orig) e.orig = b(a).children("img:first").length ? b(a).children("img:first") : b(a); if (k === "" && e.orig && e.titleFromAlt) k = e.orig.attr("alt"); c = e.href || (a.nodeName ? b(a).attr("href") : a.href) || null; if (/^(?:javascript)/i.test(c) ||
c == "#") c = null; if (e.type) { g = e.type; if (!c) c = e.content } else if (e.content) g = "html"; else if (c) g = c.match(J) ? "image" : c.match(W) ? "swf" : b(a).hasClass("iframe") ? "iframe" : c.indexOf("#") === 0 ? "inline" : "ajax"; if (g) {
                if (g == "inline") { a = c.substr(c.indexOf("#")); g = b(a).length > 0 ? "inline" : "ajax" } e.type = g; e.href = c; e.title = k; if (e.autoDimensions) if (e.type == "html" || e.type == "inline" || e.type == "ajax") { e.width = "auto"; e.height = "auto" } else e.autoDimensions = false; if (e.modal) {
                    e.overlayShow = true; e.hideOnOverlayClick = false; e.hideOnContentClick =
false; e.enableEscapeButton = false; e.showCloseButton = false
                } e.padding = parseInt(e.padding, 10); e.margin = parseInt(e.margin, 10); m.css("padding", e.padding + e.margin); b(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function() { b(this).replaceWith(j.children()) }); switch (g) {
                    case "html": m.html(e.content); F(); break; case "inline": if (b(a).parent().is("#fancybox-content") === true) { h = false; break } b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(a)).bind("fancybox-cleanup", function() { b(this).replaceWith(j.children()) }).bind("fancybox-cancel",
function() { b(this).replaceWith(m.children()) }); b(a).appendTo(m); F(); break; case "image": h = false; b.fancybox.showActivity(); v = new Image; v.onerror = function() { O() }; v.onload = function() { h = true; v.onerror = v.onload = null; e.width = v.width; e.height = v.height; b("<img />").attr({ id: "fancybox-img", src: v.src, alt: e.title }).appendTo(m); Q() }; v.src = c; break; case "swf": e.scrolling = "no"; C = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + e.width + '" height="' + e.height + '"><param name="movie" value="' + c +
'"></param>'; P = ""; b.each(e.swf, function(x, H) { C += '<param name="' + x + '" value="' + H + '"></param>'; P += " " + x + '="' + H + '"' }); C += '<embed src="' + c + '" type="application/x-shockwave-flash" width="' + e.width + '" height="' + e.height + '"' + P + "></embed></object>"; m.html(C); F(); break; case "ajax": h = false; b.fancybox.showActivity(); e.ajax.win = e.ajax.success; G = b.ajax(b.extend({}, e.ajax, { url: c, data: e.ajax.data || {}, error: function(x) { x.status > 0 && O() }, success: function(x, H, R) {
    if ((typeof R == "object" ? R : G).status == 200) {
        if (typeof e.ajax.win ==
"function") { w = e.ajax.win(c, x, H, R); if (w === false) { t.hide(); return } else if (typeof w == "string" || typeof w == "object") x = w } m.html(x); F()
    } 
} 
})); break; case "iframe": Q()
                } 
            } else O()
        } 
    }, F = function() {
        var a = e.width, c = e.height; a = a.toString().indexOf("%") > -1 ? parseInt((b(window).width() - e.margin * 2) * parseFloat(a) / 100, 10) + "px" : a == "auto" ? "auto" : a + "px"; c = c.toString().indexOf("%") > -1 ? parseInt((b(window).height() - e.margin * 2) * parseFloat(c) / 100, 10) + "px" : c == "auto" ? "auto" : c + "px"; m.wrapInner('<div style="width:' + a + ";height:" + c +
";overflow: " + (e.scrolling == "auto" ? "auto" : e.scrolling == "yes" ? "scroll" : "hidden") + ';position:relative;"></div>'); e.width = m.width(); e.height = m.height(); Q()
    }, Q = function() {
        var a, c; t.hide(); if (f.is(":visible") && false === d.onCleanup(l, p, d)) { b.event.trigger("fancybox-cancel"); h = false } else {
            h = true; b(j.add(u)).unbind(); b(window).unbind("resize.fb scroll.fb"); b(document).unbind("keydown.fb"); f.is(":visible") && d.titlePosition !== "outside" && f.css("height", f.height()); l = o; p = q; d = e; if (d.overlayShow) {
                u.css({ "background-color": d.overlayColor,
                    opacity: d.overlayOpacity, cursor: d.hideOnOverlayClick ? "pointer" : "auto", height: b(document).height()
                }); if (!u.is(":visible")) { M && b("select:not(#fancybox-tmp select)").filter(function() { return this.style.visibility !== "hidden" }).css({ visibility: "hidden" }).one("fancybox-cleanup", function() { this.style.visibility = "inherit" }); u.show() } 
            } else u.hide(); i = X(); s = d.title || ""; y = 0; n.empty().removeAttr("style").removeClass(); if (d.titleShow !== false) {
                if (b.isFunction(d.titleFormat)) a = d.titleFormat(s, l, p, d); else a = s && s.length ?
d.titlePosition == "float" ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + s + '</td><td id="fancybox-title-float-right"></td></tr></table>' : '<div id="fancybox-title-' + d.titlePosition + '">' + s + "</div>" : false; s = a; if (!(!s || s === "")) {
                    n.addClass("fancybox-title-" + d.titlePosition).html(s).appendTo("body").show(); switch (d.titlePosition) {
                        case "inside": n.css({ width: i.width - d.padding * 2, marginLeft: d.padding, marginRight: d.padding });
                            y = n.outerHeight(true); n.appendTo(D); i.height += y; break; case "over": n.css({ marginLeft: d.padding, width: i.width - d.padding * 2, bottom: d.padding }).appendTo(D); break; case "float": n.css("left", parseInt((n.width() - i.width - 40) / 2, 10) * -1).appendTo(f); break; default: n.css({ width: i.width - d.padding * 2, paddingLeft: d.padding, paddingRight: d.padding }).appendTo(f)
                    } 
                } 
            } n.hide(); if (f.is(":visible")) {
                b(E.add(z).add(A)).hide(); a = f.position(); r = { top: a.top, left: a.left, width: f.width(), height: f.height() }; c = r.width == i.width && r.height ==
i.height; j.fadeTo(d.changeFade, 0.3, function() { var g = function() { j.html(m.contents()).fadeTo(d.changeFade, 1, S) }; b.event.trigger("fancybox-change"); j.empty().removeAttr("filter").css({ "border-width": d.padding, width: i.width - d.padding * 2, height: e.autoDimensions ? "auto" : i.height - y - d.padding * 2 }); if (c) g(); else { B.prop = 0; b(B).animate({ prop: 1 }, { duration: d.changeSpeed, easing: d.easingChange, step: T, complete: g }) } })
            } else {
                f.removeAttr("style"); j.css("border-width", d.padding); if (d.transitionIn == "elastic") {
                    r = V(); j.html(m.contents());
                    f.show(); if (d.opacity) i.opacity = 0; B.prop = 0; b(B).animate({ prop: 1 }, { duration: d.speedIn, easing: d.easingIn, step: T, complete: S })
                } else { d.titlePosition == "inside" && y > 0 && n.show(); j.css({ width: i.width - d.padding * 2, height: e.autoDimensions ? "auto" : i.height - y - d.padding * 2 }).html(m.contents()); f.css(i).fadeIn(d.transitionIn == "none" ? 0 : d.speedIn, S) } 
            } 
        } 
    }, Y = function() {
        if (d.enableEscapeButton || d.enableKeyboardNav) b(document).bind("keydown.fb", function(a) {
            if (a.keyCode == 27 && d.enableEscapeButton) { a.preventDefault(); b.fancybox.close() } else if ((a.keyCode ==
37 || a.keyCode == 39) && d.enableKeyboardNav && a.target.tagName !== "INPUT" && a.target.tagName !== "TEXTAREA" && a.target.tagName !== "SELECT") { a.preventDefault(); b.fancybox[a.keyCode == 37 ? "prev" : "next"]() } 
        }); if (d.showNavArrows) { if (d.cyclic && l.length > 1 || p !== 0) z.show(); if (d.cyclic && l.length > 1 || p != l.length - 1) A.show() } else { z.hide(); A.hide() } 
    }, S = function() {
        if (!b.support.opacity) { j.get(0).style.removeAttribute("filter"); f.get(0).style.removeAttribute("filter") } e.autoDimensions && j.css("height", "auto"); f.css("height", "auto");
        s && s.length && n.show(); d.showCloseButton && E.show(); Y(); d.hideOnContentClick && j.bind("click", b.fancybox.close); d.hideOnOverlayClick && u.bind("click", b.fancybox.close); b(window).bind("resize.fb", b.fancybox.resize); d.centerOnScroll && b(window).bind("scroll.fb", b.fancybox.center); if (d.type == "iframe") b('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + (b.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + e.scrolling + '" src="' + d.href + '"></iframe>').appendTo(j);
        f.show(); h = false; b.fancybox.center(); d.onComplete(l, p, d); var a, c; if (l.length - 1 > p) { a = l[p + 1].href; if (typeof a !== "undefined" && a.match(J)) { c = new Image; c.src = a } } if (p > 0) { a = l[p - 1].href; if (typeof a !== "undefined" && a.match(J)) { c = new Image; c.src = a } } 
    }, T = function(a) {
        var c = { width: parseInt(r.width + (i.width - r.width) * a, 10), height: parseInt(r.height + (i.height - r.height) * a, 10), top: parseInt(r.top + (i.top - r.top) * a, 10), left: parseInt(r.left + (i.left - r.left) * a, 10) }; if (typeof i.opacity !== "undefined") c.opacity = a < 0.5 ? 0.5 : a; f.css(c);
        j.css({ width: c.width - d.padding * 2, height: c.height - y * a - d.padding * 2 })
    }, U = function() { return [b(window).width() - d.margin * 2, b(window).height() - d.margin * 2, b(document).scrollLeft() + d.margin, b(document).scrollTop() + d.margin] }, X = function() {
        var a = U(), c = {}, g = d.autoScale, k = d.padding * 2; c.width = d.width.toString().indexOf("%") > -1 ? parseInt(a[0] * parseFloat(d.width) / 100, 10) : d.width + k; c.height = d.height.toString().indexOf("%") > -1 ? parseInt(a[1] * parseFloat(d.height) / 100, 10) : d.height + k; if (g && (c.width > a[0] || c.height > a[1])) if (e.type ==
"image" || e.type == "swf") { g = d.width / d.height; if (c.width > a[0]) { c.width = a[0]; c.height = parseInt((c.width - k) / g + k, 10) } if (c.height > a[1]) { c.height = a[1]; c.width = parseInt((c.height - k) * g + k, 10) } } else { c.width = Math.min(c.width, a[0]); c.height = Math.min(c.height, a[1]) } c.top = parseInt(Math.max(a[3] - 20, a[3] + (a[1] - c.height - 40) * 0.5), 10); c.left = parseInt(Math.max(a[2] - 20, a[2] + (a[0] - c.width - 40) * 0.5), 10); return c
    }, V = function() {
        var a = e.orig ? b(e.orig) : false, c = {}; if (a && a.length) {
            c = a.offset(); c.top += parseInt(a.css("paddingTop"),
10) || 0; c.left += parseInt(a.css("paddingLeft"), 10) || 0; c.top += parseInt(a.css("border-top-width"), 10) || 0; c.left += parseInt(a.css("border-left-width"), 10) || 0; c.width = a.width(); c.height = a.height(); c = { width: c.width + d.padding * 2, height: c.height + d.padding * 2, top: c.top - d.padding - 20, left: c.left - d.padding - 20}
        } else { a = U(); c = { width: d.padding * 2, height: d.padding * 2, top: parseInt(a[3] + a[1] * 0.5, 10), left: parseInt(a[2] + a[0] * 0.5, 10)} } return c
    }, Z = function() { if (t.is(":visible")) { b("div", t).css("top", L * -40 + "px"); L = (L + 1) % 12 } else clearInterval(K) };
    b.fn.fancybox = function(a) { if (!b(this).length) return this; b(this).data("fancybox", b.extend({}, a, b.metadata ? b(this).metadata() : {})).unbind("click.fb").bind("click.fb", function(c) { c.preventDefault(); if (!h) { h = true; b(this).blur(); o = []; q = 0; c = b(this).attr("rel") || ""; if (!c || c == "" || c === "nofollow") o.push(this); else { o = b("a[rel=" + c + "], area[rel=" + c + "]"); q = o.index(this) } I() } }); return this }; b.fancybox = function(a, c) {
        var g; if (!h) {
            h = true; g = typeof c !== "undefined" ? c : {}; o = []; q = parseInt(g.index, 10) || 0; if (b.isArray(a)) {
                for (var k =
0, C = a.length; k < C; k++) if (typeof a[k] == "object") b(a[k]).data("fancybox", b.extend({}, g, a[k])); else a[k] = b({}).data("fancybox", b.extend({ content: a[k] }, g)); o = jQuery.merge(o, a)
            } else { if (typeof a == "object") b(a).data("fancybox", b.extend({}, g, a)); else a = b({}).data("fancybox", b.extend({ content: a }, g)); o.push(a) } if (q > o.length || q < 0) q = 0; I()
        } 
    }; b.fancybox.showActivity = function() { clearInterval(K); t.show(); K = setInterval(Z, 66) }; b.fancybox.hideActivity = function() { t.hide() }; b.fancybox.next = function() {
        return b.fancybox.pos(p +
1)
    }; b.fancybox.prev = function() { return b.fancybox.pos(p - 1) }; b.fancybox.pos = function(a) { if (!h) { a = parseInt(a); o = l; if (a > -1 && a < l.length) { q = a; I() } else if (d.cyclic && l.length > 1) { q = a >= l.length ? 0 : l.length - 1; I() } } }; b.fancybox.cancel = function() { if (!h) { h = true; b.event.trigger("fancybox-cancel"); N(); e.onCancel(o, q, e); h = false } }; b.fancybox.close = function() {
        function a() { u.fadeOut("fast"); n.empty().hide(); f.hide(); b.event.trigger("fancybox-cleanup"); j.empty(); d.onClosed(l, p, d); l = e = []; p = q = 0; d = e = {}; h = false } if (!(h || f.is(":hidden"))) {
            h =
true; if (d && false === d.onCleanup(l, p, d)) h = false; else {
                N(); b(E.add(z).add(A)).hide(); b(j.add(u)).unbind(); b(window).unbind("resize.fb scroll.fb"); b(document).unbind("keydown.fb"); j.find("iframe").attr("src", M && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank"); d.titlePosition !== "inside" && n.empty(); f.stop(); if (d.transitionOut == "elastic") {
                    r = V(); var c = f.position(); i = { top: c.top, left: c.left, width: f.width(), height: f.height() }; if (d.opacity) i.opacity = 1; n.empty().hide(); B.prop = 1;
                    b(B).animate({ prop: 0 }, { duration: d.speedOut, easing: d.easingOut, step: T, complete: a })
                } else f.fadeOut(d.transitionOut == "none" ? 0 : d.speedOut, a)
            } 
        } 
    }; b.fancybox.resize = function() { u.is(":visible") && u.css("height", b(document).height()); b.fancybox.center(true) }; b.fancybox.center = function(a) {
        var c, g; if (!h) {
            g = a === true ? 1 : 0; c = U(); !g && (f.width() > c[0] || f.height() > c[1]) || f.stop().animate({ top: parseInt(Math.max(c[3] - 20, c[3] + (c[1] - j.height() - 40) * 0.5 - d.padding)), left: parseInt(Math.max(c[2] - 20, c[2] + (c[0] - j.width() - 40) * 0.5 -
d.padding))
            }, typeof a == "number" ? a : 200)
        } 
    }; b.fancybox.init = function() {
        if (!b("#fancybox-wrap").length) {
            b("body").append(m = b('<div id="fancybox-tmp"></div>'), t = b('<div id="fancybox-loading"><div></div></div>'), u = b('<div id="fancybox-overlay"></div>'), f = b('<div id="fancybox-wrap"></div>')); D = b('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
            D.append(j = b('<div id="fancybox-content"></div>'), E = b('<a id="fancybox-close"></a>'), n = b('<div id="fancybox-title"></div>'), z = b('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), A = b('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')); E.click(b.fancybox.close); t.click(b.fancybox.cancel); z.click(function(a) { a.preventDefault(); b.fancybox.prev() }); A.click(function(a) { a.preventDefault(); b.fancybox.next() });
            b.fn.mousewheel && f.bind("mousewheel.fb", function(a, c) { if (h) a.preventDefault(); else if (b(a.target).get(0).clientHeight == 0 || b(a.target).get(0).scrollHeight === b(a.target).get(0).clientHeight) { a.preventDefault(); b.fancybox[c > 0 ? "prev" : "next"]() } }); b.support.opacity || f.addClass("fancybox-ie"); if (M) { t.addClass("fancybox-ie6"); f.addClass("fancybox-ie6"); b('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(D) } 
        } 
    };
    b.fn.fancybox.defaults = { padding: 10, margin: 40, opacity: false, modal: false, cyclic: false, scrolling: "auto", width: 560, height: 340, autoScale: true, autoDimensions: true, centerOnScroll: false, ajax: {}, swf: { wmode: "transparent" }, hideOnOverlayClick: true, hideOnContentClick: false, overlayShow: true, overlayOpacity: 0.7, overlayColor: "#777", titleShow: true, titlePosition: "float", titleFormat: null, titleFromAlt: false, transitionIn: "fade", transitionOut: "fade", speedIn: 300, speedOut: 300, changeSpeed: 300, changeFade: "fast", easingIn: "swing",
        easingOut: "swing", showCloseButton: true, showNavArrows: true, enableEscapeButton: true, enableKeyboardNav: true, onStart: function() { }, onCancel: function() { }, onComplete: function() { }, onCleanup: function() { }, onClosed: function() { }, onError: function() { }
    }; b(document).ready(function() { b.fancybox.init() })
})(jQuery);

//jQuery(document).ready(function() {
//    fancyConfirm_text();
//});
function fancyAlert(msg, callback) {
    var ret;
    jQuery.fancybox({
        'modal': true,
        'content': "<div style=\"margin:1px;width:auto;min-width:200px;font-size:11px;\"><div style=\"border-bottom: 1px solid silver;font-size: 12px;font-weight: bold;padding-bottom: 2px;margin-bottom:12px;width: 100%;\">THÔNG BÁO <img onclick=\"jQuery.fancybox.close();\" style=\"float:right;margin-top:3px;cursor:pointer;\" src=\"/icons/close.png\"></div>"
        + msg + "<div style=\"text-align:right;margin-top:15px;\"><input  type=\"button\" onclick=\"jQuery.fancybox.close();\" class=\"da-button blue\" value=\"Đồng ý\"></div></div>",
        onComplete: function() {
            ret = true;
        },
        onClosed: function() {
            if (callback != '')
                eval(callback);
            //callback.call(this, ret);
        }
    });
}

function fancyConfirm(msg, callback) {
    var ret;
    jQuery.fancybox({
        modal: true,
        content: "<div style=\"margin:1px;min-width:200px;width:auto;font-size:11px;\"><div style=\"border-bottom: 1px solid silver;font-size: 12px;font-weight: bold;padding-bottom: 2px;margin-bottom:12px;width: 100%;\">THÔNG BÁO <img onclick=\"jQuery.fancybox.close();\" style=\"float:right;margin-top:3px;cursor:pointer;\" src=\"/icons/close.png\"></div>"
        + msg + "<div style=\"text-align:right;margin-top:15px;\"><input id=\"fancyConfirm_ok\"  class=\"da-button blue\" type=\"button\" value=\"Đồng ý\"><input id=\"fancyConfirm_cancel\" style=\"margin-left:10px;\"  type=\"button\" class=\"da-button blue\" value=\"Hủy bỏ\"></div></div>",
        onComplete: function() {
            jQuery("#fancyConfirm_cancel").click(function() {
                ret = false;
                jQuery.fancybox.close();
            })
            jQuery("#fancyConfirm_ok").click(function() {
                ret = true;
                jQuery.fancybox.close();
            })
        },
        onClosed: function() {
            callback.call(this, ret);
        }
    });
}
/***************************************************************************************************************
                                            END FANCY BOX
/***************************************************************************************************************/


/***************************************************************************************************************
                                            COMBOBOX
/***************************************************************************************************************/
//(function($) {
//    $.widget("ui.combobox", {
//        _create: function() {
//            var self = this,
//                                  select = this.element.hide(),
//                                  selected = select.children(":selected"),
//                                  value = selected.val() ? selected.text() : "";
//            var input = this.input = $("<input>")
//                                  .insertAfter(select)
//                                  .val(value)
//                                  .autocomplete({
//                                      delay: 0,
//                                      minLength: 0,
//                                      source: function(request, response) {
//                                          var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
//                                          response(select.children("option").map(function() {
//                                              var text = $(this).text();
//                                              if (this.value && (!request.term || matcher.test(text)))
//                                                  return {
//                                                      label: text.replace(
//                                                                           new RegExp(
//                                                                                  "(?![^&;]+;)(?!<[^<>]*)(" +
//                                                                                  $.ui.autocomplete.escapeRegex(request.term) +
//                                                                                  ")(?![^<>]*>)(?![^&;]+;)", "gi"
//                                                                           ), "<strong>$1</strong>"),
//                                                      value: text,
//                                                      option: this
//                                                  };
//                                          }));
//                                      },
//                                      select: function(event, ui) {
//                                          ui.item.option.selected = true;
//                                          self._trigger("selected", event, {
//                                              item: ui.item.option
//                                          });
//                                          //JK
//                                          //optionSelected(ui.item.option.value);

//                                      },
//                                      change: function(event, ui) {
//                                          if (!ui.item) {
//                                              var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i"),
//                                                              valid = false;
//                                              select.children("option").each(function() {
//                                                  if ($(this).text().match(matcher)) {
//                                                      this.selected = valid = true;
//                                                      return false;
//                                                  }
//                                              });
//                                              if (!valid) {
//                                                  // remove invalid value, as it didn't match anything
//                                                  $(this).val("");
//                                                  select.val("");
//                                                  input.data("autocomplete").term = "";
//                                                  return false;
//                                              }
//                                          }
//                                      }
//                                  }).click(function() {
//                                      input.autocomplete("search", "");
//                                  });
//            //                                  .addClass("ui-widget ui-widget-content ui-corner-left");

//            input.data("autocomplete")._renderItem = function(ul, item) {
//                return $("<li></li>")
//                                         .data("item.autocomplete", item)
//                                         .append("<a>" + item.label + "</a>")
//                                          .appendTo(ul);
//            };

//            this.button = $("<button type='button' class='select-icon'>&nbsp;</button>")
//                                  .attr("tabIndex", -1)
//                                  .attr("title", "Show All Items")
//                                  .insertAfter(input)
//                                  .button({
//                                      icons: {
//                                          primary: "ui-icon-triangle-1-s"
//                                      },
//                                      text: false
//                                  })
//            //                                  .removeClass("ui-corner-all")
//            //                                  .addClass("ui-corner-right ui-button-icon")
//                                  .click(function() {
//                                      // close if already visible
//                                      if (input.autocomplete("widget").is(":visible")) {
//                                          input.autocomplete("close");
//                                          return;
//                                      }

//                                      // pass empty string as value to search for, displaying all results
//                                      input.autocomplete("search", "");
//                                      input.focus();
//                                  });
//        },

//        destroy: function() {
//            this.input.remove();
//            this.button.remove();
//            this.element.show();
//            $.Widget.prototype.destroy.call(this);
//        }
//    });
//})(jQuery);
/***************************************************************************************************************
                                            END COMBOBOX
/***************************************************************************************************************/

/***************************************************************************************************************
                                            PLACEHOLDER
/***************************************************************************************************************/
/*! http://mths.be/placeholder v1.8.6 by @mathias */
; (function(window, document, $) {

    var isInputSupported = 'placeholder' in document.createElement('input'),
	    isTextareaSupported = 'placeholder' in document.createElement('textarea'),
	    prototype = $.fn,
	    placeholder;

    if (isInputSupported && isTextareaSupported) {

        placeholder = prototype.placeholder = function() {
            return this;
        };

        placeholder.input = placeholder.textarea = true;

    } else {

        placeholder = prototype.placeholder = function() {
            return this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind('focus.placeholder', clearPlaceholder)
				.bind('blur.placeholder', setPlaceholder)
				.trigger('blur.placeholder').end();
        };

        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;

        $(function() {
            // Look for forms
            $('form').bind('submit.placeholder', function() {
                // Clear the placeholder values so they donâ€™t get submitted
                var $inputs = $('.placeholder', this).each(clearPlaceholder);
                setTimeout(function() {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });

        // Clear placeholder values upon page reload
        $(window).bind('unload.placeholder', function() {
            $('.placeholder').val('');
        });

    }

    function args(elem) {
        // Return an object of element attributes
        var newAttrs = {},
		    rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function(i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }

    function clearPlaceholder() {
        var $input = $(this);
        if ($input.val() === $input.attr('placeholder') && $input.hasClass('placeholder')) {
            if ($input.data('placeholder-password')) {
                $input.hide().next().show().focus().attr('id', $input.removeAttr('id').data('placeholder-id'));
            } else {
                $input.val('').removeClass('placeholder');
            }
        }
    }

    function setPlaceholder() {
        var $replacement,
		    $input = $(this),
		    $origInput = $input,
		    id = this.id;
        if ($input.val() === '') {
            if ($input.is(':password')) {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().attr({ 'type': 'text' });
                    } catch (e) {
                        $replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
                    }
                    $replacement
						.removeAttr('name')
                    // We could just use the `.data(obj)` syntax here, but that wouldnâ€™t work in pre-1.4.3 jQueries
						.data('placeholder-password', true)
						.data('placeholder-id', id)
						.bind('focus.placeholder', clearPlaceholder);
                    $input
						.data('placeholder-textinput', $replacement)
						.data('placeholder-id', id)
						.before($replacement);
                }
                $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
            }
            $input.addClass('placeholder').val($input.attr('placeholder'));
        } else {
            $input.removeClass('placeholder');
        }
    }

} (this, document, jQuery));
/***************************************************************************************************************
                                        END PLACEHOLDER
/***************************************************************************************************************/





/***************************************************************************************************************
MASKEHINPUT
/***************************************************************************************************************/
/*
Masked Input plugin for jQuery
Copyright (c) 2007-2011 Josh Bush (digitalbush.com)
Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license) 
Version: 1.3
*/
(function($) {
    var pasteEventName = ($.browser.msie ? 'paste' : 'input') + ".mask";
    var iPhone = (window.orientation != undefined);

    $.mask = {
        //Predefined character definitions
        definitions: {
            '9': "[0-9]",
            'a': "[A-Za-z]",
            '*': "[A-Za-z0-9]"
        },
        dataName: "rawMaskFn"
    };

    $.fn.extend({
        //Helper Function for Caret positioning
        caret: function(begin, end) {
            if (this.length == 0) return;
            if (typeof begin == 'number') {
                end = (typeof end == 'number') ? end : begin;
                return this.each(function() {
                    if (this.setSelectionRange) {
                        this.setSelectionRange(begin, end);
                    } else if (this.createTextRange) {
                        var range = this.createTextRange();
                        range.collapse(true);
                        range.moveEnd('character', end);
                        range.moveStart('character', begin);
                        range.select();
                    }
                });
            } else {
                if (this[0].setSelectionRange) {
                    begin = this[0].selectionStart;
                    end = this[0].selectionEnd;
                } else if (document.selection && document.selection.createRange) {
                    var range = document.selection.createRange();
                    begin = 0 - range.duplicate().moveStart('character', -100000);
                    end = begin + range.text.length;
                }
                return { begin: begin, end: end };
            }
        },
        unmask: function() { return this.trigger("unmask"); },
        mask: function(mask, settings) {
            if (!mask && this.length > 0) {
                var input = $(this[0]);
                return input.data($.mask.dataName)();
            }
            settings = $.extend({
                placeholder: "_",
                completed: null
            }, settings);

            var defs = $.mask.definitions;
            var tests = [];
            var partialPosition = mask.length;
            var firstNonMaskPos = null;
            var len = mask.length;

            $.each(mask.split(""), function(i, c) {
                if (c == '?') {
                    len--;
                    partialPosition = i;
                } else if (defs[c]) {
                    tests.push(new RegExp(defs[c]));
                    if (firstNonMaskPos == null)
                        firstNonMaskPos = tests.length - 1;
                } else {
                    tests.push(null);
                }
            });

            return this.trigger("unmask").each(function() {
                var input = $(this);
                var buffer = $.map(mask.split(""), function(c, i) { if (c != '?') return defs[c] ? settings.placeholder : c });
                var focusText = input.val();

                function seekNext(pos) {
                    while (++pos <= len && !tests[pos]);
                    return pos;
                };
                function seekPrev(pos) {
                    while (--pos >= 0 && !tests[pos]);
                    return pos;
                };

                function shiftL(begin, end) {
                    if (begin < 0)
                        return;
                    for (var i = begin, j = seekNext(end); i < len; i++) {
                        if (tests[i]) {
                            if (j < len && tests[i].test(buffer[j])) {
                                buffer[i] = buffer[j];
                                buffer[j] = settings.placeholder;
                            } else
                                break;
                            j = seekNext(j);
                        }
                    }
                    writeBuffer();
                    input.caret(Math.max(firstNonMaskPos, begin));
                };

                function shiftR(pos) {
                    for (var i = pos, c = settings.placeholder; i < len; i++) {
                        if (tests[i]) {
                            var j = seekNext(i);
                            var t = buffer[i];
                            buffer[i] = c;
                            if (j < len && tests[j].test(t))
                                c = t;
                            else
                                break;
                        }
                    }
                };

                function keydownEvent(e) {
                    var k = e.which;

                    //backspace, delete, and escape get special treatment
                    if (k == 8 || k == 46 || (iPhone && k == 127)) {
                        var pos = input.caret(),
							begin = pos.begin,
							end = pos.end;

                        if (end - begin == 0) {
                            begin = k != 46 ? seekPrev(begin) : (end = seekNext(begin - 1));
                            end = k == 46 ? seekNext(end) : end;
                        }
                        clearBuffer(begin, end);
                        shiftL(begin, end - 1);

                        return false;
                    } else if (k == 27) {//escape
                        input.val(focusText);
                        input.caret(0, checkVal());
                        return false;
                    }
                };

                function keypressEvent(e) {
                    var k = e.which,
						pos = input.caret();
                    if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
                        return true;
                    } else if (k) {
                        if (pos.end - pos.begin != 0) {
                            clearBuffer(pos.begin, pos.end);
                            shiftL(pos.begin, pos.end - 1);
                        }

                        var p = seekNext(pos.begin - 1);
                        if (p < len) {
                            var c = String.fromCharCode(k);
                            if (tests[p].test(c)) {
                                shiftR(p);
                                buffer[p] = c;
                                writeBuffer();
                                var next = seekNext(p);
                                input.caret(next);
                                if (settings.completed && next >= len)
                                    settings.completed.call(input);
                            }
                        }
                        return false;
                    }
                };

                function clearBuffer(start, end) {
                    for (var i = start; i < end && i < len; i++) {
                        if (tests[i])
                            buffer[i] = settings.placeholder;
                    }
                };

                function writeBuffer() { return input.val(buffer.join('')).val(); };

                function checkVal(allow) {
                    //try to place characters where they belong
                    var test = input.val();
                    var lastMatch = -1;
                    for (var i = 0, pos = 0; i < len; i++) {
                        if (tests[i]) {
                            buffer[i] = settings.placeholder;
                            while (pos++ < test.length) {
                                var c = test.charAt(pos - 1);
                                if (tests[i].test(c)) {
                                    buffer[i] = c;
                                    lastMatch = i;
                                    break;
                                }
                            }
                            if (pos > test.length)
                                break;
                        } else if (buffer[i] == test.charAt(pos) && i != partialPosition) {
                            pos++;
                            lastMatch = i;
                        }
                    }
                    if (!allow && lastMatch + 1 < partialPosition) {
                        input.val("");
                        clearBuffer(0, len);
                    } else if (allow || lastMatch + 1 >= partialPosition) {
                        writeBuffer();
                        if (!allow) input.val(input.val().substring(0, lastMatch + 1));
                    }
                    return (partialPosition ? i : firstNonMaskPos);
                };

                input.data($.mask.dataName, function() {
                    return $.map(buffer, function(c, i) {
                        return tests[i] && c != settings.placeholder ? c : null;
                    }).join('');
                })

                if (!input.attr("readonly"))
                    input
					.one("unmask", function() {
					    input
							.unbind(".mask")
							.removeData($.mask.dataName);
					})
					.bind("focus.mask", function() {
					    focusText = input.val();
					    var pos = checkVal();
					    writeBuffer();
					    var moveCaret = function() {
					        if (pos == mask.length)
					            input.caret(0, pos);
					        else
					            input.caret(pos);
					    };
					    ($.browser.msie ? moveCaret : function() { setTimeout(moveCaret, 0) })();
					})
					.bind("blur.mask", function() {
					    checkVal();
					    if (input.val() != focusText)
					        input.change();
					})
					.bind("keydown.mask", keydownEvent)
					.bind("keypress.mask", keypressEvent)
					.bind(pasteEventName, function() {
					    setTimeout(function() { input.caret(checkVal(true)); }, 0);
					});

                checkVal(); //Perform initial check for existing values
            });
        }
    });
})(jQuery);

/***************************************************************************************************************
END MASKEHINPUT
/***************************************************************************************************************/

(function($) {

    /*
    * Lets not redefine timepicker, Prevent "Uncaught RangeError: Maximum call stack size exceeded"
    */
    $.ui.timepicker = $.ui.timepicker || {};
    if ($.ui.timepicker.version) {
        return;
    }

    /*
    * Extend jQueryUI, get it started with our version number
    */
    $.extend($.ui, {
        timepicker: {
            version: "1.0.4"
        }
    });

    /* 
    * Timepicker manager.
    * Use the singleton instance of this class, $.timepicker, to interact with the time picker.
    * Settings for (groups of) time pickers are maintained in an instance object,
    * allowing multiple different settings on the same page.
    */
    function Timepicker() {
        this.regional = []; // Available regional settings, indexed by language code
        this.regional[''] = { // Default regional settings
            currentText: 'Now',
            closeText: 'Done',
            ampm: false,
            amNames: ['AM', 'A'],
            pmNames: ['PM', 'P'],
            timeFormat: 'hh:mm tt',
            timeSuffix: '',
            timeOnlyTitle: 'Choose Time',
            timeText: 'Time',
            hourText: 'Hour',
            minuteText: 'Minute',
            secondText: 'Second',
            millisecText: 'Millisecond',
            timezoneText: 'Time Zone'
        };
        this._defaults = { // Global defaults for all the datetime picker instances
            showButtonPanel: true,
            timeOnly: false,
            showHour: true,
            showMinute: true,
            showSecond: false,
            showMillisec: false,
            showTimezone: false,
            showTime: true,
            stepHour: 1,
            stepMinute: 1,
            stepSecond: 1,
            stepMillisec: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisec: 0,
            timezone: null,
            useLocalTimezone: false,
            defaultTimezone: "+0000",
            hourMin: 0,
            minuteMin: 0,
            secondMin: 0,
            millisecMin: 0,
            hourMax: 23,
            minuteMax: 59,
            secondMax: 59,
            millisecMax: 999,
            minDateTime: null,
            maxDateTime: null,
            onSelect: null,
            hourGrid: 0,
            minuteGrid: 0,
            secondGrid: 0,
            millisecGrid: 0,
            alwaysSetTime: true,
            separator: ' ',
            altFieldTimeOnly: true,
            altSeparator: null,
            altTimeSuffix: null,
            showTimepicker: true,
            timezoneIso8601: false,
            timezoneList: null,
            addSliderAccess: false,
            sliderAccessArgs: null,
            defaultValue: null
        };
        $.extend(this._defaults, this.regional['']);
    }

    $.extend(Timepicker.prototype, {
        $input: null,
        $altInput: null,
        $timeObj: null,
        inst: null,
        hour_slider: null,
        minute_slider: null,
        second_slider: null,
        millisec_slider: null,
        timezone_select: null,
        hour: 0,
        minute: 0,
        second: 0,
        millisec: 0,
        timezone: null,
        defaultTimezone: "+0000",
        hourMinOriginal: null,
        minuteMinOriginal: null,
        secondMinOriginal: null,
        millisecMinOriginal: null,
        hourMaxOriginal: null,
        minuteMaxOriginal: null,
        secondMaxOriginal: null,
        millisecMaxOriginal: null,
        ampm: '',
        formattedDate: '',
        formattedTime: '',
        formattedDateTime: '',
        timezoneList: null,
        units: ['hour', 'minute', 'second', 'millisec'],

        /* 
        * Override the default settings for all instances of the time picker.
        * @param  settings  object - the new settings to use as defaults (anonymous object)
        * @return the manager object
        */
        setDefaults: function(settings) {
            extendRemove(this._defaults, settings || {});
            return this;
        },

        /*
        * Create a new Timepicker instance
        */
        _newInst: function($input, o) {
            var tp_inst = new Timepicker(),
				inlineSettings = {};

            for (var attrName in this._defaults) {
                if (this._defaults.hasOwnProperty(attrName)) {
                    var attrValue = $input.attr('time:' + attrName);
                    if (attrValue) {
                        try {
                            inlineSettings[attrName] = eval(attrValue);
                        } catch (err) {
                            inlineSettings[attrName] = attrValue;
                        }
                    }
                }
            }
            tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, o, {
                beforeShow: function(input, dp_inst) {
                    if ($.isFunction(o.beforeShow)) {
                        return o.beforeShow(input, dp_inst, tp_inst);
                    }
                },
                onChangeMonthYear: function(year, month, dp_inst) {
                    // Update the time as well : this prevents the time from disappearing from the $input field.
                    tp_inst._updateDateTime(dp_inst);
                    if ($.isFunction(o.onChangeMonthYear)) {
                        o.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst);
                    }
                },
                onClose: function(dateText, dp_inst) {
                    if (tp_inst.timeDefined === true && $input.val() !== '') {
                        tp_inst._updateDateTime(dp_inst);
                    }
                    if ($.isFunction(o.onClose)) {
                        o.onClose.call($input[0], dateText, dp_inst, tp_inst);
                    }
                },
                timepicker: tp_inst // add timepicker as a property of datepicker: $.datepicker._get(dp_inst, 'timepicker');
            });
            tp_inst.amNames = $.map(tp_inst._defaults.amNames, function(val) {
                return val.toUpperCase();
            });
            tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function(val) {
                return val.toUpperCase();
            });

            if (tp_inst._defaults.timezoneList === null) {
                var timezoneList = ['-1200', '-1100', '-1000', '-0930', '-0900', '-0800', '-0700', '-0600', '-0500', '-0430', '-0400', '-0330', '-0300', '-0200', '-0100', '+0000',
									'+0100', '+0200', '+0300', '+0330', '+0400', '+0430', '+0500', '+0530', '+0545', '+0600', '+0630', '+0700', '+0800', '+0845', '+0900', '+0930',
									'+1000', '+1030', '+1100', '+1130', '+1200', '+1245', '+1300', '+1400'];

                if (tp_inst._defaults.timezoneIso8601) {
                    timezoneList = $.map(timezoneList, function(val) {
                        return val == '+0000' ? 'Z' : (val.substring(0, 3) + ':' + val.substring(3));
                    });
                }
                tp_inst._defaults.timezoneList = timezoneList;
            }

            tp_inst.timezone = tp_inst._defaults.timezone;
            tp_inst.hour = tp_inst._defaults.hour;
            tp_inst.minute = tp_inst._defaults.minute;
            tp_inst.second = tp_inst._defaults.second;
            tp_inst.millisec = tp_inst._defaults.millisec;
            tp_inst.ampm = '';
            tp_inst.$input = $input;

            if (o.altField) {
                tp_inst.$altInput = $(o.altField).css({
                    cursor: 'pointer'
                }).focus(function() {
                    $input.trigger("focus");
                });
            }

            if (tp_inst._defaults.minDate === 0 || tp_inst._defaults.minDateTime === 0) {
                tp_inst._defaults.minDate = new Date();
            }
            if (tp_inst._defaults.maxDate === 0 || tp_inst._defaults.maxDateTime === 0) {
                tp_inst._defaults.maxDate = new Date();
            }

            // datepicker needs minDate/maxDate, timepicker needs minDateTime/maxDateTime..
            if (tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date) {
                tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime());
            }
            if (tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date) {
                tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime());
            }
            if (tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date) {
                tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime());
            }
            if (tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date) {
                tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime());
            }
            tp_inst.$input.bind('focus', function() {
                tp_inst._onFocus();
            });

            return tp_inst;
        },

        /*
        * add our sliders to the calendar
        */
        _addTimePicker: function(dp_inst) {
            var currDT = (this.$altInput && this._defaults.altFieldTimeOnly) ? this.$input.val() + ' ' + this.$altInput.val() : this.$input.val();

            this.timeDefined = this._parseTime(currDT);
            this._limitMinMaxDateTime(dp_inst, false);
            this._injectTimePicker();
        },

        /*
        * parse the time string from input value or _setTime
        */
        _parseTime: function(timeString, withDate) {
            if (!this.inst) {
                this.inst = $.datepicker._getInst(this.$input[0]);
            }

            if (withDate || !this._defaults.timeOnly) {
                var dp_dateFormat = $.datepicker._get(this.inst, 'dateFormat');
                try {
                    var parseRes = parseDateTimeInternal(dp_dateFormat, this._defaults.timeFormat, timeString, $.datepicker._getFormatConfig(this.inst), this._defaults);
                    if (!parseRes.timeObj) {
                        return false;
                    }
                    $.extend(this, parseRes.timeObj);
                } catch (err) {
                    return false;
                }
                return true;
            } else {
                var timeObj = $.datepicker.parseTime(this._defaults.timeFormat, timeString, this._defaults);
                if (!timeObj) {
                    return false;
                }
                $.extend(this, timeObj);
                return true;
            }
        },

        /*
        * generate and inject html for timepicker into ui datepicker
        */
        _injectTimePicker: function() {
            var $dp = this.inst.dpDiv,
				o = this.inst.settings,
				tp_inst = this,
				litem = '',
				uitem = '',
				max = {},
				gridSize = {},
				size = null;

            // Prevent displaying twice
            if ($dp.find("div.ui-timepicker-div").length === 0 && o.showTimepicker) {
                var noDisplay = ' style="display:none;"',
					html = '<div class="ui-timepicker-div"><dl>' + '<dt class="ui_tpicker_time_label"' + ((o.showTime) ? '' : noDisplay) + '>' + o.timeText + '</dt>' +
								'<dd class="ui_tpicker_time"' + ((o.showTime) ? '' : noDisplay) + '></dd>';

                // Create the markup
                for (var i = 0, l = this.units.length; i < l; i++) {
                    litem = this.units[i];
                    uitem = litem.substr(0, 1).toUpperCase() + litem.substr(1);
                    // Added by Peter Medeiros:
                    // - Figure out what the hour/minute/second max should be based on the step values.
                    // - Example: if stepMinute is 15, then minMax is 45.
                    max[litem] = parseInt((o[litem + 'Max'] - ((o[litem + 'Max'] - o[litem + 'Min']) % o['step' + uitem])), 10);
                    gridSize[litem] = 0;

                    html += '<dt class="ui_tpicker_' + litem + '_label"' + ((o['show' + uitem]) ? '' : noDisplay) + '>' + o[litem + 'Text'] + '</dt>' +
								'<dd class="ui_tpicker_' + litem + '"><div class="ui_tpicker_' + litem + '_slider"' + ((o['show' + uitem]) ? '' : noDisplay) + '></div>';

                    if (o['show' + uitem] && o[litem + 'Grid'] > 0) {
                        html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';

                        if (litem == 'hour') {
                            for (var h = o[litem + 'Min']; h <= max[litem]; h += parseInt(o[litem + 'Grid'], 10)) {
                                gridSize[litem]++;
                                var tmph = (o.ampm && h > 12) ? h - 12 : h;
                                if (tmph < 10) {
                                    tmph = '0' + tmph;
                                }
                                if (o.ampm) {
                                    if (h === 0) {
                                        tmph = 12 + 'a';
                                    } else {
                                        if (h < 12) {
                                            tmph += 'a';
                                        } else {
                                            tmph += 'p';
                                        }
                                    }
                                }
                                html += '<td data-for="' + litem + '">' + tmph + '</td>';
                            }
                        }
                        else {
                            for (var m = o[litem + 'Min']; m <= max[litem]; m += parseInt(o[litem + 'Grid'], 10)) {
                                gridSize[litem]++;
                                html += '<td data-for="' + litem + '">' + ((m < 10) ? '0' : '') + m + '</td>';
                            }
                        }

                        html += '</tr></table></div>';
                    }
                    html += '</dd>';
                }

                // Timezone
                html += '<dt class="ui_tpicker_timezone_label"' + ((o.showTimezone) ? '' : noDisplay) + '>' + o.timezoneText + '</dt>';
                html += '<dd class="ui_tpicker_timezone" ' + ((o.showTimezone) ? '' : noDisplay) + '></dd>';

                // Create the elements from string
                html += '</dl></div>';
                var $tp = $(html);

                // if we only want time picker...
                if (o.timeOnly === true) {
                    $tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all">' + '<div class="ui-datepicker-title">' + o.timeOnlyTitle + '</div>' + '</div>');
                    $dp.find('.ui-datepicker-header, .ui-datepicker-calendar').hide();
                }

                // Updated by Peter Medeiros:
                // - Pass in Event and UI instance into slide function
                this.hour_slider = $tp.find('.ui_tpicker_hour_slider').prop('slide', null).slider({
                    orientation: "horizontal",
                    value: this.hour,
                    min: o.hourMin,
                    max: max.hour,
                    step: o.stepHour,
                    slide: function(event, ui) {
                        tp_inst.hour_slider.slider("option", "value", ui.value);
                        tp_inst._onTimeChange();
                    },
                    stop: function(event, ui) {
                        tp_inst._onSelectHandler();
                    }
                });

                this.minute_slider = $tp.find('.ui_tpicker_minute_slider').prop('slide', null).slider({
                    orientation: "horizontal",
                    value: this.minute,
                    min: o.minuteMin,
                    max: max.minute,
                    step: o.stepMinute,
                    slide: function(event, ui) {
                        tp_inst.minute_slider.slider("option", "value", ui.value);
                        tp_inst._onTimeChange();
                    },
                    stop: function(event, ui) {
                        tp_inst._onSelectHandler();
                    }
                });

                this.second_slider = $tp.find('.ui_tpicker_second_slider').prop('slide', null).slider({
                    orientation: "horizontal",
                    value: this.second,
                    min: o.secondMin,
                    max: max.second,
                    step: o.stepSecond,
                    slide: function(event, ui) {
                        tp_inst.second_slider.slider("option", "value", ui.value);
                        tp_inst._onTimeChange();
                    },
                    stop: function(event, ui) {
                        tp_inst._onSelectHandler();
                    }
                });

                this.millisec_slider = $tp.find('.ui_tpicker_millisec_slider').prop('slide', null).slider({
                    orientation: "horizontal",
                    value: this.millisec,
                    min: o.millisecMin,
                    max: max.millisec,
                    step: o.stepMillisec,
                    slide: function(event, ui) {
                        tp_inst.millisec_slider.slider("option", "value", ui.value);
                        tp_inst._onTimeChange();
                    },
                    stop: function(event, ui) {
                        tp_inst._onSelectHandler();
                    }
                });

                // add sliders, adjust grids, add events
                for (var i = 0, l = tp_inst.units.length; i < l; i++) {
                    litem = tp_inst.units[i];
                    uitem = litem.substr(0, 1).toUpperCase() + litem.substr(1);

                    /* 
                    Something fishy happens when assigning to tp_inst['hour_slider'] instead of tp_inst.hour_slider, I think 
                    it is because it is assigned as a prototype. Clicking the slider will always change to the previous value 
                    not the new one clicked. Ideally this works and reduces the 80+ lines of code above
                    // add the slider
                    tp_inst[litem+'_slider'] = $tp.find('.ui_tpicker_'+litem+'_slider').prop('slide', null).slider({
                    orientation: "horizontal",
                    value: tp_inst[litem],
                    min: o[litem+'Min'],
                    max: max[litem],
                    step: o['step'+uitem],
                    slide: function(event, ui) {
                    tp_inst[litem+'_slider'].slider("option", "value", ui.value);
                    tp_inst._onTimeChange();
                    },
                    stop: function(event, ui) {
                    //Emulate datepicker onSelect behavior. Call on slidestop.
                    tp_inst._onSelectHandler();
                    }
                    });
                    */

                    // adjust the grid and add click event
                    if (o['show' + uitem] && o[litem + 'Grid'] > 0) {
                        size = 100 * gridSize[litem] * o[litem + 'Grid'] / (max[litem] - o[litem + 'Min']);
                        $tp.find('.ui_tpicker_' + litem + ' table').css({
                            width: size + "%",
                            marginLeft: (size / (-2 * gridSize[litem])) + "%",
                            borderCollapse: 'collapse'
                        }).find("td").click(function(e) {
                            var $t = $(this),
									h = $t.html(),
									f = $t.data('for'); // loses scope, so we use data-for

                            if (f == 'hour' && o.ampm) {
                                var ap = h.substring(2).toLowerCase(),
										aph = parseInt(h.substring(0, 2), 10);
                                if (ap == 'a') {
                                    if (aph == 12) {
                                        h = 0;
                                    } else {
                                        h = aph;
                                    }
                                } else if (aph == 12) {
                                    h = 12;
                                } else {
                                    h = aph + 12;
                                }
                            }
                            tp_inst[f + '_slider'].slider("option", "value", parseInt(h, 10));
                            tp_inst._onTimeChange();
                            tp_inst._onSelectHandler();
                        })
						.css({
						    cursor: 'pointer',
						    width: (100 / gridSize[litem]) + '%',
						    textAlign: 'center',
						    overflow: 'hidden'
						});
                    } // end if grid > 0
                } // end for loop

                // Add timezone options
                this.timezone_select = $tp.find('.ui_tpicker_timezone').append('<select></select>').find("select");
                $.fn.append.apply(this.timezone_select,
				$.map(o.timezoneList, function(val, idx) {
				    return $("<option />").val(typeof val == "object" ? val.value : val).text(typeof val == "object" ? val.label : val);
				}));
                if (typeof (this.timezone) != "undefined" && this.timezone !== null && this.timezone !== "") {
                    var local_date = new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12);
                    var local_timezone = $.timepicker.timeZoneOffsetString(local_date);
                    if (local_timezone == this.timezone) {
                        selectLocalTimeZone(tp_inst);
                    } else {
                        this.timezone_select.val(this.timezone);
                    }
                } else {
                    if (typeof (this.hour) != "undefined" && this.hour !== null && this.hour !== "") {
                        this.timezone_select.val(o.defaultTimezone);
                    } else {
                        selectLocalTimeZone(tp_inst);
                    }
                }
                this.timezone_select.change(function() {
                    tp_inst._defaults.useLocalTimezone = false;
                    tp_inst._onTimeChange();
                });
                // End timezone options

                // inject timepicker into datepicker
                var $buttonPanel = $dp.find('.ui-datepicker-buttonpane');
                if ($buttonPanel.length) {
                    $buttonPanel.before($tp);
                } else {
                    $dp.append($tp);
                }

                this.$timeObj = $tp.find('.ui_tpicker_time');

                if (this.inst !== null) {
                    var timeDefined = this.timeDefined;
                    this._onTimeChange();
                    this.timeDefined = timeDefined;
                }

                // slideAccess integration: http://trentrichardson.com/2011/11/11/jquery-ui-sliders-and-touch-accessibility/
                if (this._defaults.addSliderAccess) {
                    var sliderAccessArgs = this._defaults.sliderAccessArgs;
                    setTimeout(function() { // fix for inline mode
                        if ($tp.find('.ui-slider-access').length === 0) {
                            $tp.find('.ui-slider:visible').sliderAccess(sliderAccessArgs);

                            // fix any grids since sliders are shorter
                            var sliderAccessWidth = $tp.find('.ui-slider-access:eq(0)').outerWidth(true);
                            if (sliderAccessWidth) {
                                $tp.find('table:visible').each(function() {
                                    var $g = $(this),
										oldWidth = $g.outerWidth(),
										oldMarginLeft = $g.css('marginLeft').toString().replace('%', ''),
										newWidth = oldWidth - sliderAccessWidth,
										newMarginLeft = ((oldMarginLeft * newWidth) / oldWidth) + '%';

                                    $g.css({
                                        width: newWidth,
                                        marginLeft: newMarginLeft
                                    });
                                });
                            }
                        }
                    }, 10);
                }
                // end slideAccess integration

            }
        },

        /*
        * This function tries to limit the ability to go outside the
        * min/max date range
        */
        _limitMinMaxDateTime: function(dp_inst, adjustSliders) {
            var o = this._defaults,
				dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);

            if (!this._defaults.showTimepicker) {
                return;
            } // No time so nothing to check here

            if ($.datepicker._get(dp_inst, 'minDateTime') !== null && $.datepicker._get(dp_inst, 'minDateTime') !== undefined && dp_date) {
                var minDateTime = $.datepicker._get(dp_inst, 'minDateTime'),
					minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);

                if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null) {
                    this.hourMinOriginal = o.hourMin;
                    this.minuteMinOriginal = o.minuteMin;
                    this.secondMinOriginal = o.secondMin;
                    this.millisecMinOriginal = o.millisecMin;
                }

                if (dp_inst.settings.timeOnly || minDateTimeDate.getTime() == dp_date.getTime()) {
                    this._defaults.hourMin = minDateTime.getHours();
                    if (this.hour <= this._defaults.hourMin) {
                        this.hour = this._defaults.hourMin;
                        this._defaults.minuteMin = minDateTime.getMinutes();
                        if (this.minute <= this._defaults.minuteMin) {
                            this.minute = this._defaults.minuteMin;
                            this._defaults.secondMin = minDateTime.getSeconds();
                            if (this.second <= this._defaults.secondMin) {
                                this.second = this._defaults.secondMin;
                                this._defaults.millisecMin = minDateTime.getMilliseconds();
                            } else {
                                if (this.millisec < this._defaults.millisecMin) {
                                    this.millisec = this._defaults.millisecMin;
                                }
                                this._defaults.millisecMin = this.millisecMinOriginal;
                            }
                        } else {
                            this._defaults.secondMin = this.secondMinOriginal;
                            this._defaults.millisecMin = this.millisecMinOriginal;
                        }
                    } else {
                        this._defaults.minuteMin = this.minuteMinOriginal;
                        this._defaults.secondMin = this.secondMinOriginal;
                        this._defaults.millisecMin = this.millisecMinOriginal;
                    }
                } else {
                    this._defaults.hourMin = this.hourMinOriginal;
                    this._defaults.minuteMin = this.minuteMinOriginal;
                    this._defaults.secondMin = this.secondMinOriginal;
                    this._defaults.millisecMin = this.millisecMinOriginal;
                }
            }

            if ($.datepicker._get(dp_inst, 'maxDateTime') !== null && $.datepicker._get(dp_inst, 'maxDateTime') !== undefined && dp_date) {
                var maxDateTime = $.datepicker._get(dp_inst, 'maxDateTime'),
					maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);

                if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null) {
                    this.hourMaxOriginal = o.hourMax;
                    this.minuteMaxOriginal = o.minuteMax;
                    this.secondMaxOriginal = o.secondMax;
                    this.millisecMaxOriginal = o.millisecMax;
                }

                if (dp_inst.settings.timeOnly || maxDateTimeDate.getTime() == dp_date.getTime()) {
                    this._defaults.hourMax = maxDateTime.getHours();
                    if (this.hour >= this._defaults.hourMax) {
                        this.hour = this._defaults.hourMax;
                        this._defaults.minuteMax = maxDateTime.getMinutes();
                        if (this.minute >= this._defaults.minuteMax) {
                            this.minute = this._defaults.minuteMax;
                            this._defaults.secondMax = maxDateTime.getSeconds();
                        } else if (this.second >= this._defaults.secondMax) {
                            this.second = this._defaults.secondMax;
                            this._defaults.millisecMax = maxDateTime.getMilliseconds();
                        } else {
                            if (this.millisec > this._defaults.millisecMax) {
                                this.millisec = this._defaults.millisecMax;
                            }
                            this._defaults.millisecMax = this.millisecMaxOriginal;
                        }
                    } else {
                        this._defaults.minuteMax = this.minuteMaxOriginal;
                        this._defaults.secondMax = this.secondMaxOriginal;
                        this._defaults.millisecMax = this.millisecMaxOriginal;
                    }
                } else {
                    this._defaults.hourMax = this.hourMaxOriginal;
                    this._defaults.minuteMax = this.minuteMaxOriginal;
                    this._defaults.secondMax = this.secondMaxOriginal;
                    this._defaults.millisecMax = this.millisecMaxOriginal;
                }
            }

            if (adjustSliders !== undefined && adjustSliders === true) {
                var hourMax = parseInt((this._defaults.hourMax - ((this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour)), 10),
					minMax = parseInt((this._defaults.minuteMax - ((this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute)), 10),
					secMax = parseInt((this._defaults.secondMax - ((this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond)), 10),
					millisecMax = parseInt((this._defaults.millisecMax - ((this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec)), 10);

                if (this.hour_slider) {
                    this.hour_slider.slider("option", {
                        min: this._defaults.hourMin,
                        max: hourMax
                    }).slider('value', this.hour);
                }
                if (this.minute_slider) {
                    this.minute_slider.slider("option", {
                        min: this._defaults.minuteMin,
                        max: minMax
                    }).slider('value', this.minute);
                }
                if (this.second_slider) {
                    this.second_slider.slider("option", {
                        min: this._defaults.secondMin,
                        max: secMax
                    }).slider('value', this.second);
                }
                if (this.millisec_slider) {
                    this.millisec_slider.slider("option", {
                        min: this._defaults.millisecMin,
                        max: millisecMax
                    }).slider('value', this.millisec);
                }
            }

        },

        /*
        * when a slider moves, set the internal time...
        * on time change is also called when the time is updated in the text field
        */
        _onTimeChange: function() {
            var hour = (this.hour_slider) ? this.hour_slider.slider('value') : false,
				minute = (this.minute_slider) ? this.minute_slider.slider('value') : false,
				second = (this.second_slider) ? this.second_slider.slider('value') : false,
				millisec = (this.millisec_slider) ? this.millisec_slider.slider('value') : false,
				timezone = (this.timezone_select) ? this.timezone_select.val() : false,
				o = this._defaults;

            if (typeof (hour) == 'object') {
                hour = false;
            }
            if (typeof (minute) == 'object') {
                minute = false;
            }
            if (typeof (second) == 'object') {
                second = false;
            }
            if (typeof (millisec) == 'object') {
                millisec = false;
            }
            if (typeof (timezone) == 'object') {
                timezone = false;
            }

            if (hour !== false) {
                hour = parseInt(hour, 10);
            }
            if (minute !== false) {
                minute = parseInt(minute, 10);
            }
            if (second !== false) {
                second = parseInt(second, 10);
            }
            if (millisec !== false) {
                millisec = parseInt(millisec, 10);
            }

            var ampm = o[hour < 12 ? 'amNames' : 'pmNames'][0];

            // If the update was done in the input field, the input field should not be updated.
            // If the update was done using the sliders, update the input field.
            var hasChanged = (hour != this.hour || minute != this.minute || second != this.second || millisec != this.millisec
								|| (this.ampm.length > 0 && (hour < 12) != ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1))
								|| ((this.timezone === null && timezone != this.defaultTimezone) || (this.timezone !== null && timezone != this.timezone)));

            if (hasChanged) {

                if (hour !== false) {
                    this.hour = hour;
                }
                if (minute !== false) {
                    this.minute = minute;
                }
                if (second !== false) {
                    this.second = second;
                }
                if (millisec !== false) {
                    this.millisec = millisec;
                }
                if (timezone !== false) {
                    this.timezone = timezone;
                }

                if (!this.inst) {
                    this.inst = $.datepicker._getInst(this.$input[0]);
                }

                this._limitMinMaxDateTime(this.inst, true);
            }
            if (o.ampm) {
                this.ampm = ampm;
            }

            //this._formatTime();
            this.formattedTime = $.datepicker.formatTime(this._defaults.timeFormat, this, this._defaults);
            if (this.$timeObj) {
                this.$timeObj.text(this.formattedTime + o.timeSuffix);
            }
            this.timeDefined = true;
            if (hasChanged) {
                this._updateDateTime();
            }
        },

        /*
        * call custom onSelect.
        * bind to sliders slidestop, and grid click.
        */
        _onSelectHandler: function() {
            var onSelect = this._defaults.onSelect || this.inst.settings.onSelect;
            var inputEl = this.$input ? this.$input[0] : null;
            if (onSelect && inputEl) {
                onSelect.apply(inputEl, [this.formattedDateTime, this]);
            }
        },

        /*
        * left for any backwards compatibility
        */
        _formatTime: function(time, format) {
            time = time || {
                hour: this.hour,
                minute: this.minute,
                second: this.second,
                millisec: this.millisec,
                ampm: this.ampm,
                timezone: this.timezone
            };
            var tmptime = (format || this._defaults.timeFormat).toString();

            tmptime = $.datepicker.formatTime(tmptime, time, this._defaults);

            if (arguments.length) {
                return tmptime;
            } else {
                this.formattedTime = tmptime;
            }
        },

        /*
        * update our input with the new date time..
        */
        _updateDateTime: function(dp_inst) {
            dp_inst = this.inst || dp_inst;
            var dt = $.datepicker._daylightSavingAdjust(new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
				dateFmt = $.datepicker._get(dp_inst, 'dateFormat'),
				formatCfg = $.datepicker._getFormatConfig(dp_inst),
				timeAvailable = dt !== null && this.timeDefined;
            this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg);
            var formattedDateTime = this.formattedDate;

            /*
            * remove following lines to force every changes in date picker to change the input value
            * Bug descriptions: when an input field has a default value, and click on the field to pop up the date picker. 
            * If the user manually empty the value in the input field, the date picker will never change selected value.
            */
            //if (dp_inst.lastVal !== undefined && (dp_inst.lastVal.length > 0 && this.$input.val().length === 0)) {
            //	return;
            //}

            if (this._defaults.timeOnly === true) {
                formattedDateTime = this.formattedTime;
            } else if (this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) {
                formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix;
            }

            this.formattedDateTime = formattedDateTime;

            if (!this._defaults.showTimepicker) {
                this.$input.val(this.formattedDate);
            } else if (this.$altInput && this._defaults.altFieldTimeOnly === true) {
                this.$altInput.val(this.formattedTime);
                this.$input.val(this.formattedDate);
            } else if (this.$altInput) {
                this.$input.val(formattedDateTime);
                var altFormattedDateTime = '',
					altSeparator = this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator,
					altTimeSuffix = this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
                if (this._defaults.altFormat) altFormattedDateTime = $.datepicker.formatDate(this._defaults.altFormat, (dt === null ? new Date() : dt), formatCfg);
                else altFormattedDateTime = this.formattedDate;
                if (altFormattedDateTime) altFormattedDateTime += altSeparator;
                if (this._defaults.altTimeFormat) altFormattedDateTime += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + altTimeSuffix;
                else altFormattedDateTime += this.formattedTime + altTimeSuffix;
                this.$altInput.val(altFormattedDateTime);
            } else {
                this.$input.val(formattedDateTime);
            }

            this.$input.trigger("change");
        },

        _onFocus: function() {
            if (!this.$input.val() && this._defaults.defaultValue) {
                this.$input.val(this._defaults.defaultValue);
                var inst = $.datepicker._getInst(this.$input.get(0)),
					tp_inst = $.datepicker._get(inst, 'timepicker');
                if (tp_inst) {
                    if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
                        try {
                            $.datepicker._updateDatepicker(inst);
                        } catch (err) {
                            $.datepicker.log(err);
                        }
                    }
                }
            }
        }

    });

    $.fn.extend({
        /*
        * shorthand just to use timepicker..
        */
        timepicker: function(o) {
            o = o || {};
            var tmp_args = Array.prototype.slice.call(arguments);

            if (typeof o == 'object') {
                tmp_args[0] = $.extend(o, {
                    timeOnly: true
                });
            }

            return $(this).each(function() {
                $.fn.datetimepicker.apply($(this), tmp_args);
            });
        },

        /*
        * extend timepicker to datepicker
        */
        datetimepicker: function(o) {
            o = o || {};
            var tmp_args = arguments;

            if (typeof (o) == 'string') {
                if (o == 'getDate') {
                    return $.fn.datepicker.apply($(this[0]), tmp_args);
                } else {
                    return this.each(function() {
                        var $t = $(this);
                        $t.datepicker.apply($t, tmp_args);
                    });
                }
            } else {
                return this.each(function() {
                    var $t = $(this);
                    $t.datepicker($.timepicker._newInst($t, o)._defaults);
                });
            }
        }
    });

    /*
    * Public Utility to parse date and time
    */
    $.datepicker.parseDateTime = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
        var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings);
        if (parseRes.timeObj) {
            var t = parseRes.timeObj;
            parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec);
        }

        return parseRes.date;
    };

    /*
    * Public utility to parse time
    */
    $.datepicker.parseTime = function(timeFormat, timeString, options) {

        // pattern for standard and localized AM/PM markers
        var getPatternAmpm = function(amNames, pmNames) {
            var markers = [];
            if (amNames) {
                $.merge(markers, amNames);
            }
            if (pmNames) {
                $.merge(markers, pmNames);
            }
            markers = $.map(markers, function(val) {
                return val.replace(/[.*+?|()\[\]{}\\]/g, '\\$&');
            });
            return '(' + markers.join('|') + ')?';
        };

        // figure out position of time elements.. cause js cant do named captures
        var getFormatPositions = function(timeFormat) {
            var finds = timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|t{1,2}|z)/g),
				orders = {
				    h: -1,
				    m: -1,
				    s: -1,
				    l: -1,
				    t: -1,
				    z: -1
				};

            if (finds) {
                for (var i = 0; i < finds.length; i++) {
                    if (orders[finds[i].toString().charAt(0)] == -1) {
                        orders[finds[i].toString().charAt(0)] = i + 1;
                    }
                }
            }
            return orders;
        };

        var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {});

        var regstr = '^' + timeFormat.toString()
									.replace(/h{1,2}/ig, '(\\d?\\d)')
									.replace(/m{1,2}/ig, '(\\d?\\d)')
									.replace(/s{1,2}/ig, '(\\d?\\d)')
									.replace(/l{1}/ig, '(\\d?\\d?\\d)')
									.replace(/t{1,2}/ig, getPatternAmpm(o.amNames, o.pmNames))
									.replace(/z{1}/ig, '(z|[-+]\\d\\d:?\\d\\d|\\S+)?')
									.replace(/\s/g, '\\s?') +
									o.timeSuffix + '$',
			order = getFormatPositions(timeFormat),
			ampm = '',
			treg;

        treg = timeString.match(new RegExp(regstr, 'i'));

        var resTime = {
            hour: 0,
            minute: 0,
            second: 0,
            millisec: 0
        };

        if (treg) {
            if (order.t !== -1) {
                if (treg[order.t] === undefined || treg[order.t].length === 0) {
                    ampm = '';
                    resTime.ampm = '';
                } else {
                    ampm = $.inArray(treg[order.t].toUpperCase(), o.amNames) !== -1 ? 'AM' : 'PM';
                    resTime.ampm = o[ampm == 'AM' ? 'amNames' : 'pmNames'][0];
                }
            }

            if (order.h !== -1) {
                if (ampm == 'AM' && treg[order.h] == '12') {
                    resTime.hour = 0; // 12am = 0 hour
                } else {
                    if (ampm == 'PM' && treg[order.h] != '12') {
                        resTime.hour = parseInt(treg[order.h], 10) + 12; // 12pm = 12 hour, any other pm = hour + 12
                    } else {
                        resTime.hour = Number(treg[order.h]);
                    }
                }
            }

            if (order.m !== -1) {
                resTime.minute = Number(treg[order.m]);
            }
            if (order.s !== -1) {
                resTime.second = Number(treg[order.s]);
            }
            if (order.l !== -1) {
                resTime.millisec = Number(treg[order.l]);
            }
            if (order.z !== -1 && treg[order.z] !== undefined) {
                var tz = treg[order.z].toUpperCase();
                switch (tz.length) {
                    case 1:
                        // Z
                        tz = o.timezoneIso8601 ? 'Z' : '+0000';
                        break;
                    case 5:
                        // +hhmm
                        if (o.timezoneIso8601) {
                            tz = tz.substring(1) == '0000' ? 'Z' : tz.substring(0, 3) + ':' + tz.substring(3);
                        }
                        break;
                    case 6:
                        // +hh:mm
                        if (!o.timezoneIso8601) {
                            tz = tz == 'Z' || tz.substring(1) == '00:00' ? '+0000' : tz.replace(/:/, '');
                        } else {
                            if (tz.substring(1) == '00:00') {
                                tz = 'Z';
                            }
                        }
                        break;
                }
                resTime.timezone = tz;
            }


            return resTime;
        }

        return false;
    };

    /*
    * Public utility to format the time
    * format = string format of the time
    * time = a {}, not a Date() for timezones
    * options = essentially the regional[].. amNames, pmNames, ampm
    */
    $.datepicker.formatTime = function(format, time, options) {
        options = options || {};
        options = $.extend({}, $.timepicker._defaults, options);
        time = $.extend({
            hour: 0,
            minute: 0,
            second: 0,
            millisec: 0,
            timezone: '+0000'
        }, time);

        var tmptime = format;
        var ampmName = options.amNames[0];

        var hour = parseInt(time.hour, 10);
        if (options.ampm) {
            if (hour > 11) {
                ampmName = options.pmNames[0];
                if (hour > 12) {
                    hour = hour % 12;
                }
            }
            if (hour === 0) {
                hour = 12;
            }
        }
        tmptime = tmptime.replace(/(?:hh?|mm?|ss?|[tT]{1,2}|[lz]|('.*?'|".*?"))/g, function(match) {
            switch (match.toLowerCase()) {
                case 'hh':
                    return ('0' + hour).slice(-2);
                case 'h':
                    return hour;
                case 'mm':
                    return ('0' + time.minute).slice(-2);
                case 'm':
                    return time.minute;
                case 'ss':
                    return ('0' + time.second).slice(-2);
                case 's':
                    return time.second;
                case 'l':
                    return ('00' + time.millisec).slice(-3);
                case 'z':
                    return time.timezone === null ? options.defaultTimezone : time.timezone;
                case 't':
                case 'tt':
                    if (options.ampm) {
                        if (match.length == 1) {
                            ampmName = ampmName.charAt(0);
                        }
                        return match.charAt(0) === 'T' ? ampmName.toUpperCase() : ampmName.toLowerCase();
                    }
                    return '';
                default:
                    return match.replace(/\'/g, "") || "'";
            }
        });

        tmptime = $.trim(tmptime);
        return tmptime;
    };

    /*
    * the bad hack :/ override datepicker so it doesnt close on select
    // inspired: http://stackoverflow.com/questions/1252512/jquery-datepicker-prevent-closing-picker-when-clicking-a-date/1762378#1762378
    */
    $.datepicker._base_selectDate = $.datepicker._selectDate;
    $.datepicker._selectDate = function(id, dateStr) {
        var inst = this._getInst($(id)[0]),
			tp_inst = this._get(inst, 'timepicker');

        if (tp_inst) {
            tp_inst._limitMinMaxDateTime(inst, true);
            inst.inline = inst.stay_open = true;
            //This way the onSelect handler called from calendarpicker get the full dateTime
            this._base_selectDate(id, dateStr);
            inst.inline = inst.stay_open = false;
            this._notifyChange(inst);
            this._updateDatepicker(inst);
        } else {
            this._base_selectDate(id, dateStr);
        }
    };

    /*
    * second bad hack :/ override datepicker so it triggers an event when changing the input field
    * and does not redraw the datepicker on every selectDate event
    */
    $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
    $.datepicker._updateDatepicker = function(inst) {

        // don't popup the datepicker if there is another instance already opened
        var input = inst.input[0];
        if ($.datepicker._curInst && $.datepicker._curInst != inst && $.datepicker._datepickerShowing && $.datepicker._lastInput != input) {
            return;
        }

        if (typeof (inst.stay_open) !== 'boolean' || inst.stay_open === false) {

            this._base_updateDatepicker(inst);

            // Reload the time control when changing something in the input text field.
            var tp_inst = this._get(inst, 'timepicker');
            if (tp_inst) {
                tp_inst._addTimePicker(inst);

                if (tp_inst._defaults.useLocalTimezone) { //checks daylight saving with the new date.
                    var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay, 12);
                    selectLocalTimeZone(tp_inst, date);
                    tp_inst._onTimeChange();
                }
            }
        }
    };

    /*
    * third bad hack :/ override datepicker so it allows spaces and colon in the input field
    */
    $.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
    $.datepicker._doKeyPress = function(event) {
        var inst = $.datepicker._getInst(event.target),
			tp_inst = $.datepicker._get(inst, 'timepicker');

        if (tp_inst) {
            if ($.datepicker._get(inst, 'constrainInput')) {
                var ampm = tp_inst._defaults.ampm,
					dateChars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat')),
					datetimeChars = tp_inst._defaults.timeFormat.toString()
											.replace(/[hms]/g, '')
											.replace(/TT/g, ampm ? 'APM' : '')
											.replace(/Tt/g, ampm ? 'AaPpMm' : '')
											.replace(/tT/g, ampm ? 'AaPpMm' : '')
											.replace(/T/g, ampm ? 'AP' : '')
											.replace(/tt/g, ampm ? 'apm' : '')
											.replace(/t/g, ampm ? 'ap' : '') +
											" " + tp_inst._defaults.separator +
											tp_inst._defaults.timeSuffix +
											(tp_inst._defaults.showTimezone ? tp_inst._defaults.timezoneList.join('') : '') +
											(tp_inst._defaults.amNames.join('')) + (tp_inst._defaults.pmNames.join('')) +
											dateChars,
					chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode);
                return event.ctrlKey || (chr < ' ' || !dateChars || datetimeChars.indexOf(chr) > -1);
            }
        }

        return $.datepicker._base_doKeyPress(event);
    };

    /*
    * Override key up event to sync manual input changes.
    */
    $.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
    $.datepicker._doKeyUp = function(event) {
        var inst = $.datepicker._getInst(event.target),
			tp_inst = $.datepicker._get(inst, 'timepicker');

        if (tp_inst) {
            if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
                try {
                    $.datepicker._updateDatepicker(inst);
                } catch (err) {
                    $.datepicker.log(err);
                }
            }
        }

        return $.datepicker._base_doKeyUp(event);
    };

    /*
    * override "Today" button to also grab the time.
    */
    $.datepicker._base_gotoToday = $.datepicker._gotoToday;
    $.datepicker._gotoToday = function(id) {
        var inst = this._getInst($(id)[0]),
			$dp = inst.dpDiv;
        this._base_gotoToday(id);
        var tp_inst = this._get(inst, 'timepicker');
        selectLocalTimeZone(tp_inst);
        var now = new Date();
        this._setTime(inst, now);
        $('.ui-datepicker-today', $dp).click();
    };

    /*
    * Disable & enable the Time in the datetimepicker
    */
    $.datepicker._disableTimepickerDatepicker = function(target) {
        var inst = this._getInst(target);
        if (!inst) {
            return;
        }

        var tp_inst = this._get(inst, 'timepicker');
        $(target).datepicker('getDate'); // Init selected[Year|Month|Day]
        if (tp_inst) {
            tp_inst._defaults.showTimepicker = false;
            tp_inst._updateDateTime(inst);
        }
    };

    $.datepicker._enableTimepickerDatepicker = function(target) {
        var inst = this._getInst(target);
        if (!inst) {
            return;
        }

        var tp_inst = this._get(inst, 'timepicker');
        $(target).datepicker('getDate'); // Init selected[Year|Month|Day]
        if (tp_inst) {
            tp_inst._defaults.showTimepicker = true;
            tp_inst._addTimePicker(inst); // Could be disabled on page load
            tp_inst._updateDateTime(inst);
        }
    };

    /*
    * Create our own set time function
    */
    $.datepicker._setTime = function(inst, date) {
        var tp_inst = this._get(inst, 'timepicker');
        if (tp_inst) {
            var defaults = tp_inst._defaults;

            // calling _setTime with no date sets time to defaults
            tp_inst.hour = date ? date.getHours() : defaults.hour;
            tp_inst.minute = date ? date.getMinutes() : defaults.minute;
            tp_inst.second = date ? date.getSeconds() : defaults.second;
            tp_inst.millisec = date ? date.getMilliseconds() : defaults.millisec;

            //check if within min/max times.. 
            tp_inst._limitMinMaxDateTime(inst, true);

            tp_inst._onTimeChange();
            tp_inst._updateDateTime(inst);
        }
    };

    /*
    * Create new public method to set only time, callable as $().datepicker('setTime', date)
    */
    $.datepicker._setTimeDatepicker = function(target, date, withDate) {
        var inst = this._getInst(target);
        if (!inst) {
            return;
        }

        var tp_inst = this._get(inst, 'timepicker');

        if (tp_inst) {
            this._setDateFromField(inst);
            var tp_date;
            if (date) {
                if (typeof date == "string") {
                    tp_inst._parseTime(date, withDate);
                    tp_date = new Date();
                    tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
                } else {
                    tp_date = new Date(date.getTime());
                }
                if (tp_date.toString() == 'Invalid Date') {
                    tp_date = undefined;
                }
                this._setTime(inst, tp_date);
            }
        }

    };

    /*
    * override setDate() to allow setting time too within Date object
    */
    $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
    $.datepicker._setDateDatepicker = function(target, date) {
        var inst = this._getInst(target);
        if (!inst) {
            return;
        }

        var tp_date = (date instanceof Date) ? new Date(date.getTime()) : date;

        this._updateDatepicker(inst);
        this._base_setDateDatepicker.apply(this, arguments);
        this._setTimeDatepicker(target, tp_date, true);
    };

    /*
    * override getDate() to allow getting time too within Date object
    */
    $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
    $.datepicker._getDateDatepicker = function(target, noDefault) {
        var inst = this._getInst(target);
        if (!inst) {
            return;
        }

        var tp_inst = this._get(inst, 'timepicker');

        if (tp_inst) {
            // if it hasn't yet been defined, grab from field
            if (inst.lastVal === undefined) {
                this._setDateFromField(inst, noDefault);
            }

            var date = this._getDate(inst);
            if (date && tp_inst._parseTime($(target).val(), tp_inst.timeOnly)) {
                date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
            }
            return date;
        }
        return this._base_getDateDatepicker(target, noDefault);
    };

    /*
    * override parseDate() because UI 1.8.14 throws an error about "Extra characters"
    * An option in datapicker to ignore extra format characters would be nicer.
    */
    $.datepicker._base_parseDate = $.datepicker.parseDate;
    $.datepicker.parseDate = function(format, value, settings) {
        var date;
        try {
            date = this._base_parseDate(format, value, settings);
        } catch (err) {
            // Hack!  The error message ends with a colon, a space, and
            // the "extra" characters.  We rely on that instead of
            // attempting to perfectly reproduce the parsing algorithm.
            date = this._base_parseDate(format, value.substring(0, value.length - (err.length - err.indexOf(':') - 2)), settings);
        }
        return date;
    };

    /*
    * override formatDate to set date with time to the input
    */
    $.datepicker._base_formatDate = $.datepicker._formatDate;
    $.datepicker._formatDate = function(inst, day, month, year) {
        var tp_inst = this._get(inst, 'timepicker');
        if (tp_inst) {
            tp_inst._updateDateTime(inst);
            return tp_inst.$input.val();
        }
        return this._base_formatDate(inst);
    };

    /*
    * override options setter to add time to maxDate(Time) and minDate(Time). MaxDate
    */
    $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker;
    $.datepicker._optionDatepicker = function(target, name, value) {
        var inst = this._getInst(target);
        if (!inst) {
            return null;
        }

        var tp_inst = this._get(inst, 'timepicker');
        if (tp_inst) {
            var min = null,
				max = null,
				onselect = null;
            if (typeof name == 'string') { // if min/max was set with the string
                if (name === 'minDate' || name === 'minDateTime') {
                    min = value;
                } else {
                    if (name === 'maxDate' || name === 'maxDateTime') {
                        max = value;
                    } else {
                        if (name === 'onSelect') {
                            onselect = value;
                        }
                    }
                }
            } else {
                if (typeof name == 'object') { //if min/max was set with the JSON
                    if (name.minDate) {
                        min = name.minDate;
                    } else {
                        if (name.minDateTime) {
                            min = name.minDateTime;
                        } else {
                            if (name.maxDate) {
                                max = name.maxDate;
                            } else {
                                if (name.maxDateTime) {
                                    max = name.maxDateTime;
                                }
                            }
                        }
                    }
                }
            }
            if (min) { //if min was set
                if (min === 0) {
                    min = new Date();
                } else {
                    min = new Date(min);
                }

                tp_inst._defaults.minDate = min;
                tp_inst._defaults.minDateTime = min;
            } else if (max) { //if max was set
                if (max === 0) {
                    max = new Date();
                } else {
                    max = new Date(max);
                }
                tp_inst._defaults.maxDate = max;
                tp_inst._defaults.maxDateTime = max;
            } else if (onselect) {
                tp_inst._defaults.onSelect = onselect;
            }
        }
        if (value === undefined) {
            return this._base_optionDatepicker(target, name);
        }
        return this._base_optionDatepicker(target, name, value);
    };

    /*
    * jQuery extend now ignores nulls!
    */
    function extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props) {
            if (props[name] === null || props[name] === undefined) {
                target[name] = props[name];
            }
        }
        return target;
    }

    /*
    * Splits datetime string into date ans time substrings.
    * Throws exception when date can't be parsed
    * Returns [dateString, timeString]
    */
    var splitDateTime = function(dateFormat, dateTimeString, dateSettings, timeSettings) {
        try {
            // The idea is to get the number separator occurances in datetime and the time format requested (since time has 
            // fewer unknowns, mostly numbers and am/pm). We will use the time pattern to split.
            var separator = timeSettings && timeSettings.separator ? timeSettings.separator : $.timepicker._defaults.separator,
				format = timeSettings && timeSettings.timeFormat ? timeSettings.timeFormat : $.timepicker._defaults.timeFormat,
				ampm = timeSettings && timeSettings.ampm ? timeSettings.ampm : $.timepicker._defaults.ampm,
				timeParts = format.split(separator), // how many occurances of separator may be in our format?
				timePartsLen = timeParts.length,
				allParts = dateTimeString.split(separator),
				allPartsLen = allParts.length;

            // because our default ampm=false, but our default format has tt, we need to filter this out
            if (!ampm) {
                timeParts = $.trim(format.replace(/t/gi, '')).split(separator);
                timePartsLen = timeParts.length;
            }

            if (allPartsLen > 1) {
                return [
						allParts.splice(0, allPartsLen - timePartsLen).join(separator),
						allParts.splice(0, timePartsLen).join(separator)
					];
            }

        } catch (err) {
            if (err.indexOf(":") >= 0) {
                // Hack!  The error message ends with a colon, a space, and
                // the "extra" characters.  We rely on that instead of
                // attempting to perfectly reproduce the parsing algorithm.
                var dateStringLength = dateTimeString.length - (err.length - err.indexOf(':') - 2),
					timeString = dateTimeString.substring(dateStringLength);

                return [$.trim(dateTimeString.substring(0, dateStringLength)), $.trim(dateTimeString.substring(dateStringLength))];

            } else {
                throw err;
            }
        }
        return [dateTimeString, ''];
    };

    /*
    * Internal function to parse datetime interval
    * Returns: {date: Date, timeObj: Object}, where
    *   date - parsed date without time (type Date)
    *   timeObj = {hour: , minute: , second: , millisec: } - parsed time. Optional
    */
    var parseDateTimeInternal = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
        var date;
        var splitRes = splitDateTime(dateFormat, dateTimeString, dateSettings, timeSettings);
        date = $.datepicker._base_parseDate(dateFormat, splitRes[0], dateSettings);
        if (splitRes[1] !== '') {
            var timeString = splitRes[1],
				parsedTime = $.datepicker.parseTime(timeFormat, timeString, timeSettings);

            if (parsedTime === null) {
                throw 'Wrong time format';
            }
            return {
                date: date,
                timeObj: parsedTime
            };
        } else {
            return {
                date: date
            };
        }
    };

    /*
    * Internal function to set timezone_select to the local timezone
    */
    var selectLocalTimeZone = function(tp_inst, date) {
        if (tp_inst && tp_inst.timezone_select) {
            tp_inst._defaults.useLocalTimezone = true;
            var now = typeof date !== 'undefined' ? date : new Date();
            var tzoffset = $.timepicker.timeZoneOffsetString(now);
            if (tp_inst._defaults.timezoneIso8601) {
                tzoffset = tzoffset.substring(0, 3) + ':' + tzoffset.substring(3);
            }
            tp_inst.timezone_select.val(tzoffset);
        }
    };

    /*
    * Create a Singleton Insance
    */
    $.timepicker = new Timepicker();

    /**
    * Get the timezone offset as string from a date object (eg '+0530' for UTC+5.5)
    * @param  date
    * @return string
    */
    $.timepicker.timeZoneOffsetString = function(date) {
        var off = date.getTimezoneOffset() * -1,
			minutes = off % 60,
			hours = (off - minutes) / 60;
        return (off >= 0 ? '+' : '-') + ('0' + (hours * 101).toString()).substr(-2) + ('0' + (minutes * 101).toString()).substr(-2);
    };

    /**
    * Calls `timepicker()` on the `startTime` and `endTime` elements, and configures them to
    * enforce date range limits.
    * n.b. The input value must be correctly formatted (reformatting is not supported)
    * @param  Element startTime
    * @param  Element endTime
    * @param  obj options Options for the timepicker() call
    * @return jQuery
    */
    $.timepicker.timeRange = function(startTime, endTime, options) {
        return $.timepicker.handleRange('timepicker', startTime, endTime, options);
    };

    /**
    * Calls `datetimepicker` on the `startTime` and `endTime` elements, and configures them to
    * enforce date range limits.
    * @param  Element startTime
    * @param  Element endTime
    * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
    *   a boolean value that can be used to reformat the input values to the `dateFormat`.
    * @param  string method Can be used to specify the type of picker to be added
    * @return jQuery
    */
    $.timepicker.dateTimeRange = function(startTime, endTime, options) {
        $.timepicker.dateRange(startTime, endTime, options, 'datetimepicker');
    };

    /**
    * Calls `method` on the `startTime` and `endTime` elements, and configures them to
    * enforce date range limits.
    * @param  Element startTime
    * @param  Element endTime
    * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
    *   a boolean value that can be used to reformat the input values to the `dateFormat`.
    * @param  string method Can be used to specify the type of picker to be added
    * @return jQuery
    */
    $.timepicker.dateRange = function(startTime, endTime, options, method) {
        method = method || 'datepicker';
        $.timepicker.handleRange(method, startTime, endTime, options);
    };

    /**
    * Calls `method` on the `startTime` and `endTime` elements, and configures them to
    * enforce date range limits.
    * @param  string method Can be used to specify the type of picker to be added
    * @param  Element startTime
    * @param  Element endTime
    * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
    *   a boolean value that can be used to reformat the input values to the `dateFormat`.
    * @return jQuery
    */
    $.timepicker.handleRange = function(method, startTime, endTime, options) {
        $.fn[method].call(startTime, $.extend({
            onClose: function(dateText, inst) {
                checkDates(this, endTime, dateText);
            },
            onSelect: function(selectedDateTime) {
                selected(this, endTime, 'minDate');
            }
        }, options, options.start));
        $.fn[method].call(endTime, $.extend({
            onClose: function(dateText, inst) {
                checkDates(this, startTime, dateText);
            },
            onSelect: function(selectedDateTime) {
                selected(this, startTime, 'maxDate');
            }
        }, options, options.end));
        // timepicker doesn't provide access to its 'timeFormat' option, 
        // nor could I get datepicker.formatTime() to behave with times, so I
        // have disabled reformatting for timepicker
        if (method != 'timepicker' && options.reformat) {
            $([startTime, endTime]).each(function() {
                var format = $(this)[method].call($(this), 'option', 'dateFormat'),
					date = new Date($(this).val());
                if ($(this).val() && date) {
                    $(this).val($.datepicker.formatDate(format, date));
                }
            });
        }
        checkDates(startTime, endTime, startTime.val());

        function checkDates(changed, other, dateText) {
            if (other.val() && (new Date(startTime.val()) > new Date(endTime.val()))) {
                other.val(dateText);
            }
        }
        selected(startTime, endTime, 'minDate');
        selected(endTime, startTime, 'maxDate');

        function selected(changed, other, option) {
            if (!$(changed).val()) {
                return;
            }
            var date = $(changed)[method].call($(changed), 'getDate');
            // timepicker doesn't implement 'getDate' and returns a jQuery
            if (date.getTime) {
                $(other)[method].call($(other), 'option', option, date);
            }
        }
        return $([startTime.get(0), endTime.get(0)]);
    };

    /*
    * Keep up with the version
    */
    $.timepicker.version = "1.0.4";

})(jQuery);



/*******************SCROLL DEVELOPER********************/
function mouseWheelHandler(n) { var e = n || window.event, t = e.originalEvent || e, f = [].slice.call(arguments, 1), i = 0, u = 0, r = 0; return n = $.event.fix(t), n.type = "mousewheel", t.wheelDelta && (i = t.wheelDelta / 120), t.detail && (i = -t.detail / 3), r = i, t.axis !== undefined && t.axis === t.HORIZONTAL_AXIS && (r = 0, u = -1 * i), t.wheelDeltaY !== undefined && (r = t.wheelDeltaY / 120), t.wheelDeltaX !== undefined && (u = t.wheelDeltaX / -120), f.unshift(n, i, u, r), $.event.handle.apply(this, f) } var types = ["DOMMouseScroll", "mousewheel"]; $.event.special.mousewheel = { setup: function() { if (this.addEventListener) for (var n = types.length; n; ) this.addEventListener(types[--n], mouseWheelHandler, !1); else this.onmousewheel = mouseWheelHandler }, teardown: function() { if (this.removeEventListener) for (var n = types.length; n; ) this.removeEventListener(types[--n], mouseWheelHandler, !1); else this.onmousewheel = null } }, $.fn.extend({ mousewheel: function(n) { var t = "mousewheel"; return n ? this.on(t, n) : this.trigger(t) }, unmousewheel: function(n) { return this.off("mousewheel", n) } }), $.fn.refreshInnerTrackedElements = function() { return this.find(".tracked").each(function() { var t = $(this); $.each(t.data("tracking-elements") || [], function() { $(this.element).stop(!0, !0), this.func.call(this.element, t) }) }), this }, $.fn.parseCSSValue = function(n, t) { var i = parseInt(this.css(n), 10); return isNaN(i) ? t || 0 : i }, function(n, t) { var k = "scroll sizechange scrollsizechange", w = "mousewheel", b = "mouseleave", p = "mouseenter", a = "touchend", h = "touchstart", y = "padding-right", v = "padding-top", rt = "padding-left", it = "padding-bottom", u = !1, g = "scroll-options", o = ".custom-scroll", s = "touch-scrolling", i = !0, e = "scroll-focus", r = "custom-scroll"; function ut(n) { n.preventDefault() } function l() { var u = n(this), t = u.data(r); t && (u.data(e, i), t.hscrollbar() && t.hscrollbar().animate({ opacity: 1 }), t.vscrollbar() && t.vscrollbar().animate({ opacity: 1 })) } function c() { var i = n(this), t = i.data(r); t && (i.removeData(e), t.hscrollbar() && t.hscrollbar().animate({ opacity: 0 }), t.vscrollbar() && t.vscrollbar().animate({ opacity: 0 })) } function d(t, i, u, f) { if (object = n(this).data(r)) { var e = object.mousewheel(u, f); e.x == 0 && e.y == 0 && object.settings.continuousWheelScroll || t.preventDefault() } } function tt() { n(this).refreshCustomScroll() } function nt(t) { var c = "touchend touchcancel", l = "touchmove", u = n(this), o = u.data(r), a = t.originalEvent.touches[0].pageX, v = t.originalEvent.touches[0].pageY, f, e, h; if (o && !u.data(s)) { f = function(n) { u.data(s, i); var r = n.originalEvent.touches[0].pageX, t = n.originalEvent.touches[0].pageY; h = o.move(a - r, t - v, i), h.x == 0 && h.y == 0 && o.settings.continuousTouchScroll || n.preventDefault(), a = r, v = t }, e = function(n) { n.stopPropagation(), u.off(l, f), u.off(c, e), u.removeData(s) }; u.on(l, f); u.on(c, e) } } var f = n(t), ft = n("html").hasClass("touch"); n.fn.customScroll = function(t) { var s = n.extend({}, n.fn.customScroll.defaults, t); this.filter(o).refreshCustomScroll(); this.not(o).addClass(r).each(function() { var et = "px", at = "css", yt = "animate", pt = "mouseup", wt = "mousemove", ri = "mousedown", si = "selectstart", hi = "<div></div>", oi = "relative", fi = "position"; function ui(n, t, r) { var f = k, u = nt; return k = Math.max(0, Math.min(k + n, w[0].scrollWidth - w.innerWidth())), nt = Math.max(0, Math.min(nt - t, w[0].scrollHeight - w.innerHeight())), o.animate && !r && ht ? w.stop(i).animate({ scrollLeft: k, scrollTop: nt }, { step: function() { w.refreshInnerTrackedElements() } }) : w.scrollLeft(k).scrollTop(nt).refreshInnerTrackedElements(), st && n != 0 && st(), ot && t != 0 && ot(), { x: k - f, y: nt - u} } function ci(n, t, i) { return n != 0 && (n = n > 0 ? Math.max(n, o.minWheelScroll) : Math.min(n, -o.minWheelScroll)), t != 0 && (t = t > 0 ? Math.max(t, o.minWheelScroll) : Math.min(t, -o.minWheelScroll)), ui(n * o.speed, t * o.speed, i) } function ei() { st && d.hide(), ot && tt.hide(), kt = w[0].scrollWidth > w.innerWidth(), ni = w[0].scrollHeight > w.innerHeight(), k = w.scrollLeft(), nt = w.scrollTop(), st && (ii = !kt && o.autoHide, st()), ot && (ti = !ni && o.autoHide, ot()) } var w = n(this), bt = w.css(fi), vt = w.is("ul, ol") ? "li" : "div", o = n.extend({}, s, w.data(g)), kt = w[0].scrollWidth > w.innerWidth(), ni = w[0].scrollHeight > w.innerHeight(), k = w.scrollLeft(), nt = w.scrollTop(), d, lt, tt, ct, dt = u, gt = u, st = u, ot = u, ii = u, ti = u, ht = u; if (bt !== oi && bt !== "absolute" && bt !== "fixed" && w.css(fi, oi), typeof o.padding != "object" && (o.padding = { top: o.padding, right: o.padding, bottom: o.padding, left: o.padding }), o.padding = n.extend({ top: 0, right: 0, bottom: 0, left: 0 }, o.padding), o.horizontal && (dt = function() { d = n("<" + vt + ' class="custom-hscrollbar"></' + vt + ">").appendTo(w), lt = n(hi).appendTo(d), d.click(function(n) { n.stopPropagation() }); lt.on(si, ut); lt.on(ri, function(t) { function r(t) { var r = d.width() - lt.innerWidth(), u = Math.max(0, Math.min(r, e + (t.pageX - s))); d[0].style.display = "none", k = r > 0 ? Math.round(u / r * (w[0].scrollWidth - w.innerWidth())) : 0, d[0].style.display = "block", o.animate && ht ? w.stop(i).animate({ scrollLeft: k }, { step: function() { n(this).refreshInnerTrackedElements() } }) : w.stop(i).scrollLeft(k).refreshInnerTrackedElements(), st && st(), ot && ot() } function u() { f.off(wt, r), f.off(pt, u) } var s = t.pageX, e = lt.parseCSSValue("left"); t.preventDefault(); f.on(wt, r); f.on(pt, u) }) }, dt(), st = function() { if (!ii) { d[0].parentNode || dt(); var u = w.width(), f = w.innerWidth(), h = o.vertical && ni && !ti ? o.cornerWidth : 0, n = (o.usePadding ? u : f) - o.padding.top - o.padding.bottom - h, t = n > o.minScrollerSize * 1.5 ? o.minScrollerSize : Math.round(n / 1.5), c = n - t, r = Math.round(c * (u / w[0].scrollWidth)) + t, s = Math.round((n - r) * (k / (w[0].scrollWidth - f))); d.show(), d.stop(i)[o.animate && ht ? yt : at]({ top: w.innerHeight() - (o.usePadding ? w.parseCSSValue(it) + o.padding.top : o.padding.bottom) - o.width + nt + et, left: (o.usePadding ? w.parseCSSValue(rt) + o.padding.right : o.padding.left) + k + et, width: n + et, height: o.width + et, opacity: w.data(e) || !o.showOnHover ? 1 : 0 }), lt.stop(i)[o.animate && ht ? yt : at]({ left: s + et, width: Math.round(r) + et }) } }), o.vertical && (gt = function() { tt = n("<" + vt + ' class="custom-vscrollbar"></' + vt + ">").appendTo(w), ct = n(hi).appendTo(tt), tt.click(function(n) { n.stopPropagation() }); ct.on(si, ut); ct.on(ri, function(t) { function r(t) { var r = tt.height() - ct.innerHeight(), u = Math.max(0, Math.min(r, e + (t.pageY - s))); tt[0].style.display = "none", nt = r > 0 ? Math.round(u / r * (w[0].scrollHeight - w.innerHeight())) : 0, tt[0].style.display = "block", o.animate && ht ? w.stop(i).animate({ scrollTop: nt }, { step: function() { n(this).refreshInnerTrackedElements() } }) : w.stop(i).scrollTop(nt).refreshInnerTrackedElements(), st && st(), ot && ot() } function u(n) { n.preventDefault(), f.off(wt, r), f.off(pt, u) } var s = t.pageY, e = ct.parseCSSValue("top"); t.preventDefault(); f.on(wt, r); f.on(pt, u) }) }, gt(), ot = function() { if (!ti) { tt[0].parentNode || gt(); var u = w.height(), f = w.innerHeight(), h = o.horizontal && kt && !ii ? o.cornerWidth : 0, n = (o.usePadding ? u : f) - o.padding.top - o.padding.bottom - h, t = n > o.minScrollerSize * 1.5 ? o.minScrollerSize : Math.round(n / 1.5), c = n - t, r = c * (u / w[0].scrollHeight) + t, s = Math.round((n - r) * (nt / (w[0].scrollHeight - f))); tt.show(), tt.stop(i)[o.animate && ht ? yt : at]({ top: (o.usePadding ? w.parseCSSValue(v) + o.padding.top : o.padding.top) + nt + et, left: w.innerWidth() - (o.usePadding ? w.parseCSSValue(y) + o.padding.right : o.padding.right) - o.width + k + et, height: n + et, width: o.width + et, opacity: w.data(e) || !o.showOnHover ? 1 : 0 }), ct.stop(i)[o.animate && ht ? yt : at]({ top: s + et, height: Math.round(r) + et }) } }), w.data(r, { settings: o, hscrollbar: function() { return d }, hscroller: function() { return lt }, vscrollbar: function() { return tt }, vscroller: function() { return ct }, refresh: ei, refreshH: ot, refreshV: ot, move: ui, mousewheel: ci }), ei(), o.showOnHover) if (d && d.css({ opacity: 0 }), tt && tt.css({ opacity: 0 }), ft) w.on(h, l).on(a, c); else w.on(p, l).on(b, c); ht = i }).on(w, d).on(k, tt).on(h, nt); return this }, n.fn.removeCustomScroll = function() { return this.filter(o).off(w, d).off(k, tt).off(h, nt).off(h, l).off(a, c).off(p, l).off(b, c).removeData(g).removeData(s).removeClass(r).children(".custom-hscrollbar, .custom-vscrollbar").remove().scrollLeft(0).scrollTop(0), this }, n.fn.hasCustomScroll = function() { return this.data(r) ? i : u }, n.fn.refreshCustomScroll = function() { return this.each(function() { var i = n(this).data(r); i && i.refresh() }), this }, n.fn.moveCustomScroll = function(t, i, u) { return this.each(function() { var e = n(this).data(r); e && e.move(t, i, u) }), this }, n.fn.scrollToReveal = function() { return this.each(function() { var i = n(this), u = i.parents(o); u.each(function() { var f = n(this), c, u, b, o, l, p, w, a, e, s = 0, h = 0; (o = f.data(r), o) && (b = f[0], u = i.offset(), c = f.offset(), u.top -= c.top + f.parseCSSValue("border-top-width"), u.left -= c.left + f.parseCSSValue("border-left-width"), l = i.outerWidth(), p = i.outerHeight(), e = { top: o.settings.usePadding ? f.parseCSSValue(v) : 0, right: o.settings.usePadding ? f.parseCSSValue(y) : 0, bottom: o.settings.usePadding ? f.parseCSSValue(it) : 0, left: o.settings.usePadding ? f.parseCSSValue(rt) : 0 }, w = f.innerWidth(), a = f.innerHeight(), u.left < e.left ? s = e.left - u.left : u.left + l > w - e.right && (s = w - e.right - u.left - l), u.top < e.top ? h = e.top - u.top : u.top + p > a - e.bottom && (h = a - e.bottom - u.top - p), (s !== 0 || h !== 0) && o.move(s, h)) }) }), this }, n.fn.customScroll.defaults = { horizontal: u, vertical: i, usePadding: u, padding: 4, width: 6, cornerWidth: 10, minScrollerSize: 30, minWheelScroll: .25, continuousWheelScroll: i, continuousTouchScroll: i, speed: 48, animate: u, showOnHover: i, autoHide: i} } (jQuery, document);
/***************************************/