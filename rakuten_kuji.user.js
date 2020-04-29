// ==UserScript==
// @name         rakuten_kuji
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://kuji.rakuten.co.jp/*

// @downloadURL https://github.com/tyanbara/js_study/raw/master/rakuten_kuji.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/rakuten_kuji.user.js

// @grant        none
// ==/UserScript==



var delay_time = 1 * 1000;

//$(document).ready(function() {
//window.onload = function(){
setInterval(function () {

	var clickMe = document.getElementById("entry");
	var event = document.createEvent("MouseEvents"); // イベントオブジェクトを作成

	event.initEvent("click", false, true); // イベントの内容を設定
	console.log('OK1')

	setTimeout(function () {
		console.log('OK_click')
		clickMe.dispatchEvent(event);
	}, delay_time);

}, 10000)