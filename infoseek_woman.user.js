// ==UserScript==
// @name         infoseek_woman
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://woman.infoseek.co.jp
// @downloadURL https://github.com/tyanbara/js_study/raw/master/infoseek_woman.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/infoseek_woman.user.js

// @require      https://github.com/tyanbara/js_study/raw/master/window_close.user.js
// @grant        none
// ==/UserScript==

var flag = 0
setInterval(function () {
    if (flag == 1) {
        my_window_close();
    }


    var clickMe = document.getElementById("lucky_lot_start");
    var event = document.createEvent("MouseEvents"); // イベントオブジェクトを作成
    event.initEvent("click", false, true); // イベントの内容を設定


    console.log(clickMe)
    if (clickMe != null) {
        clickMe.dispatchEvent(event);
        flag = 1
    } else {
        flag = 1
    }


}, 5000); // setInterval
