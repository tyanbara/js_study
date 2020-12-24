// ==UserScript==
// @name         poi_complete
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @description  try to take over the world!
// @author       You
// @match        https://pointmail.rakuten.co.jp/point/kezulot

// @downloadURL https://github.com/tyanbara/js_study/raw/master/poi_complete.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/poi_complete.user.js
// @grant        none


// @require      https://github.com/tyanbara/js_study/raw/master/window_close.user.js

// ==/UserScript==

window.onload = function () {
    setInterval(function () {
        var overlay = document.getElementById("thisScratch");
        console.log(overlay.innerText);
        if (overlay.innerText == "0") {
            console.log(overlay.innerText);
            my_window_close();
        }

        var clickMe = document.getElementById("kezulot-btn");
        // var event = document.createEvent("MouseEvents"); // イベントオブジェクトを作成
        // event.initEvent("click", false, true); // イベントの内容を設定
        // clickMe.dispatchEvent(event);
        clickMe.click();

    }, 5000); // setInterval
}


