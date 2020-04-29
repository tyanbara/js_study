// ==UserScript==
// @name         infoseek
// @namespace    http://tampermonkey.net/
// @version      0.11
// @description  try to take over the world!
// @author       You
// @match        https://www.infoseek.co.jp/
// @downloadURL https://github.com/tyanbara/js_study/raw/master/infoseek.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/infoseek.user.js

// @require      https://github.com/tyanbara/js_study/raw/master/window_close.user.js
// @grant        none
// ==/UserScript==


var cnt = 0
setInterval(function () {

    if (typeof ISTA_conbarIslot.playLot === 'function') {
        ISTA_conbarIslot.playLot()
        console.log(typeof ISTA_conbarIslot.playLot)
    }

    if (cnt > 10) {
        my_window_close();
    }
    cnt = cnt + 1
}, 1000); // setInterval
