// ==UserScript==
// @name         rakuten_pickup_close
// @namespace    http://tampermonkey.net/
// @version      0.1
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

// @grant        none
// ==/UserScript==


//window.onload = function(){
//$(document).ready(function() {
//var closer = window.open('about:blank','_self').close()
setInterval(function () {
    // var closer = window.open('about:blank','_self').close()
    var closer;
    if (/Chrome/i.test(navigator.userAgent)) {
        console.log("chrome");
        closer = window.close();
        if (closer == undefined) {
            closer = window.open('about:blank', '_self').close();
        } else {
            window.close();
        }
        //}
    } else {
        closer = window.open('about:blank', '_self').close();
        console.log("firefox");
    }
}, 1000); // setInterval

//});

//};