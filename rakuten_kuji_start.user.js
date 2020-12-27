// ==UserScript==
// @name         rakuten_kuji_start
// @namespace    http://tampermonkey.net/
// @version      0.0.2
// @description  try to take over the world!
// @author       You
// @match        https://point.rakuten.co.jp/doc/lottery/lucky/


// @downloadURL https://github.com/tyanbara/js_study/raw/master/rakuten_kuji_start.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/rakuten_kuji_start.user.js

// @require      https://github.com/tyanbara/js_study/raw/master/window_close.user.js

// @grant        none
// ==/UserScript==



var delay_time = 3 * 1000;

//$(document).ready(function() {
// jQuery(window).on('load', function ($) {
// var clickMe = document.getElementById("entry");
// var event = document.createEvent("MouseEvents"); // イベントオブジェクトを作成
// event.initEvent("click", false, true); // イベントの内容を設定

// console.log('OK1')

window.onload = function () {
	setTimeout(function () {
		var clickMe = document.getElementById("cp_btn_start");
        if (clickMe == null) {
            var clickMe2 = document.getElementById("cp_btn_already");
            // consle.log(clickMe2)
            my_window_close();
        }

        console.log(clickMe);
		console.log('OK_click');
		// console.log(clickMe);
		// clickMe.dispatchEvent(event);
		clickMe.click();


	}, delay_time);
};
// });

