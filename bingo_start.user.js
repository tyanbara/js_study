
// ==UserScript==
// @name         bingo_start
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author       You
// @match        https://pointmall.rakuten.co.jp/game/bingo/get_card


// @downloadURL https://github.com/tyanbara/js_study/raw/master/bingo_start.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/bingo_start.user.js

// @grant        none
// ==/UserScript==

var delay_time = 3 * 1000;

window.onload = function () {
    setTimeout(function () {
        // var clickMe = document.getElementById("video-add-modal-play-btn");
        var clickMe = document.getElementsByClassName("lottery-btn");
        
        console.log(clickMe);
        clickMe[0].click();
    }, delay_time);
};


