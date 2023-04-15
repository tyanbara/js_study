
// ==UserScript==
// @name         docomo
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author       You
// @match        https://dmarket.docomo.ne.jp/kuji/common/index.html
// @match        https://kuji.dmarket.docomo.ne.jp/kuji/*

// @require      https://github.com/tyanbara/js_study/raw/master/window_close.user.js


// @downloadURL https://github.com/tyanbara/js_study/raw/master/docomo.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/docomo.user.js

// @grant        none
// ==/UserScript==



var delay_time = 3 * 1000;

window.onload = function () {
    setTimeout(function () {
        // var clickMe = document.getElementById("video-add-modal-play-btn");
        var clickMe = document.getElementsByClassName("kujiStartButton");

        console.log(clickMe);
        if (clickMe.length > 0) {
            clickMe[0].childNodes[1].click();
            clickMe[0].click();
        }


        clickMe = document.querySelector("#lottery_result > div > form > div:nth-child(1) > img")

        if (null != clickMe) {
            clickMe.click();
        }
    }, delay_time);
};

