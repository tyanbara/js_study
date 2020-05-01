// ==UserScript==
// @name         pointmall_kuji
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @match        https://pointmall.rakuten.co.jp/


// @downloadURL https://github.com/tyanbara/js_study/raw/master/pointmall_kuji.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/pointmall_kuji.user.js

// @grant        none
// ==/UserScript==

var delay_time = 3 * 1000;

window.onload = function () {
    setTimeout(function () {
        // var clickMe = document.getElementsByClassName("kuji__scene01__circle kuji__scene01__circle01");
        var clickMe = document.getElementsByClassName("kuji__scene01__circle_dummy kuji__scene01__circle_dummy01");
        console.log(clickMe);
        clickMe[0].click();
    }, delay_time);
};


