// ==UserScript==
// @name         kezulot_complete
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  try to take over the world!
// @author       You
// @match        https://pointmail.rakuten.co.jp/subcard/complete

// @downloadURL https://github.com/tyanbara/js_study/raw/master/kezulot_complete.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/kezulot_complete.user.js

// @grant        none
// ==/UserScript==


window.onload = function () {
    var clickMe = document.getElementById("completionReportBtn");
    // var event = document.createEvent("MouseEvents"); // イベントオブジェクトを作成
    // event.initEvent("click", false, true); // イベントの内容を設定
    //clickMe.dispatchEvent(event);
    clickMe.click();

    // var test = document.getElementById("kotsukon-lucky-lottery");
    // console.log(test.className)
}


