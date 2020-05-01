// ==UserScript==
// @name         rakuten_pickup_close
// @namespace    http://tampermonkey.net/
// @version      0.11.3
// @description  try to take over the world!
// @author       You

// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js

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

// @downloadURL https://github.com/tyanbara/js_study/raw/master/rakuten_pickup_close.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/rakuten_pickup_close.user.js

// @require      https://github.com/tyanbara/js_study/raw/master/window_close.user.js

// @grant        none

// ==/UserScript==

jQuery(window).on('load', function ($) {
// setTimeout(function () {
    my_window_close();
// }, 1000); // setInterval
});

