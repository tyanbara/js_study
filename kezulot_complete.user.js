// ==UserScript==
// @name         kezulot_complete
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @description  try to take over the world!
// @author       You
// @match        https://pointmail.rakuten.co.jp/subcard/complete

// @downloadURL https://github.com/tyanbara/js_study/raw/master/kezulot_complete.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/kezulot_complete.user.js

// @require      https://github.com/tyanbara/js_study/raw/master/window_close.user.js
// @grant        none
// ==/UserScript==

var delay_time = 3 * 1000;

window.onload = function () {
    var clickMe = document.getElementById("completionReportBtn");
    clickMe.click();

    setTimeout(function () {
        var pr = document.getElementById("reportError");
        if (pr.innerText == "本日の報告は完了しています") {
            console.log(pr.innerText)
            my_window_close();
        }
    }, delay_time);
}


