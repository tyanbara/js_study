// ==UserScript==
// @name         kezulot_complete
// @namespace    http://tampermonkey.net/
// @version      0.1.3
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
        var l1 = document.getElementById("kotsukon-mail-de-point");
        var l2 = document.getElementById("kotsukon-lucky-lottery");
        var l3 = document.getElementById("kotsukon-r-lucky-lottery");
        var l4 = document.getElementById("kotsukon-lucky-bingo");
        var l5 = document.getElementById("kotsukon-r-web-search");

        console.log(l1.className)
        console.log(l2.className)
        var pr = document.getElementById("reportError");
        // if (pr.innerText == "本日の報告は完了しています") {
        if (l1.className =="complete" & l2.className =="complete"& l3.className =="complete"
        & l4.className =="complete"& l5.className =="complete") {
            console.log(pr.innerText)
            my_window_close();
        }
    }, delay_time);
}


// kotsukon-mail-de-point
// kotsukon-lucky-lottery
// kotsukon-r-lucky-lottery
// kotsukon-lucky-bingo
// kotsukon-r-web-search