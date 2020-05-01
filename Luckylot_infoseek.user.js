// ==UserScript==
// @name         Luckylot_infoseek
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  try to take over the world!
// @author       You
// @match        https://www.infoseek.co.jp/Luckylot


// @downloadURL https://github.com/tyanbara/js_study/raw/master/Luckylot_infoseek.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/Luckylot_infoseek.user.js

// @grant        none
// ==/UserScript==

var delay_time = 3 * 1000;

window.onload = function () {
	setTimeout(function () {
		var clickMe = document.getElementsByClassName("isluckykuji_select");
		console.log(clickMe);
		clickMe[0].click();
	}, delay_time);
};


