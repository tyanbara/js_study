// ==UserScript==
// @name         point_mall
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author       You

// @match        https://pointmall.rakuten.co.jp/*
// @match        https://pointmall.rakuten.co.jp/

// @downloadURL https://github.com/tyanbara/js_study/raw/master/point_mall.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/point_mall.user.js

// @require      https://github.com/tyanbara/js_study/raw/master/window_close.user.js

// @grant        none
// ==/UserScript==


var delay_time = 3 * 1000;

window.onload = function () {
    setTimeout(function () {
        // var owari = document.getElementsByClassName('sub-header__nav03-getpoint')
        var owari = document.getElementsByClassName('is-clear')
        console.log(owari.length)
        if (owari.length == 6) {
            my_window_close();
        }

    }, delay_time);
};
