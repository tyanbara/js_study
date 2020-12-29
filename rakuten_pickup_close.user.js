// ==UserScript==
// @name         rakuten_pickup_close
// @namespace    http://tampermonkey.net/
// @version      0.11.8
// @description  try to take over the world!
// @author       You


// @match        https://*.rakuten.co.jp/*/special_contents*
// @match        https://*.rakuten.co.jp/*/ichiba_special_rpp_c*
// @match        https://*.rakuten.co.jp/*/ichiba_special_contents*
// @match        https://*.rakuten.co.jp/event/ad/point-g/*
// @match        https://*.rakuten.co.jp/*/rpp_coupon*
// @match        https://pointmail.rakuten.co.jp/tie-up/coupon*
// @match        https://member.pointmail.rakuten.co.jp/special/lineup/
// @match        https://www.rakuten-card.co.jp/campaign/sales/ichiba_coupon/
// @match        https://www.rakuten-card.co.jp/campaign/sales/ichiba_recommend/
// @match        https://item.rakuten.co.jp/*scid=wi_ichi_ad_pc_*
// @match        https://edy.rakuten.co.jp/campaign/other/rakuten/ichiba_recommend
// @match        https://*.rakuten.co.jp/*scid=we_ich_adsol*

// @match        https://tie-up-campaign.faq.rakuten.net/s/ask
// @match        https://privacy.rakuten.co.jp/
// @match        https://privacy.rakuten.co.jp/*
// @match        https://tie-up-campaign.faq.rakuten.net/s/detail/000002491
// @match        https://*.rakuten.co.jp/*scid=we_ich_adsol*
// @match        https://point-g.rakuten.co.jp/*scid=pg_mail_kuji_no
// @match        https://network.mobile.rakuten.co.jp/?scid=mi_grp_rmb_group_common_20200406&trflg=1
// @match        https://event.rakuten.co.jp/incentive/
// @match        https://point-g.rakuten.co.jp/rapoikatsu/
// @match        https://point-g.rakuten.co.jp/educare/
// @match        https://www.rakuten.co.jp/sitemap/


// @downloadURL https://github.com/tyanbara/js_study/raw/master/rakuten_pickup_close.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/rakuten_pickup_close.user.js

// @require      https://github.com/tyanbara/js_study/raw/master/window_close.user.js

// @grant        none

// ==/UserScript==

// window.onload = function () {
//     // jQuery(window).on('load', function ($) {
//     // setTimeout(function () {
//     my_window_close();
//     // }, 1000); // setInterval
// };

(function () {
    my_window_close();
}());


