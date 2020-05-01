// ==UserScript==
// @name         rakuten_kuji
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @description  try to take over the world!
// @author       You
// @match        https://kuji.rakuten.co.jp/*

// @exclude        https://kuji.rakuten.co.jp/*/already
// @exclude        https://kuji.rakuten.co.jp/*/lose
// @exclude        https://kuji.rakuten.co.jp/*/close
// @exclude        https://kuji.rakuten.co.jp/*/win



// @downloadURL https://github.com/tyanbara/js_study/raw/master/rakuten_kuji.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/rakuten_kuji.user.js

// @grant        none
// ==/UserScript==



var delay_time = 3 * 1000;

//$(document).ready(function() {
jQuery(window).on('load', function ($) {
		var clickMe = document.getElementById("entry");
		// var event = document.createEvent("MouseEvents"); // イベントオブジェクトを作成
		// event.initEvent("click", false, true); // イベントの内容を設定

		console.log('OK1')

		setTimeout(function () {
			console.log('OK_click');
            console.log(clickMe);
			// clickMe.dispatchEvent(event);
            clickMe.click();
		}, delay_time);
});

