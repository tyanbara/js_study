// ==UserScript==
// @name         infoseek
// @namespace    http://tampermonkey.net/
// @version      0.11
// @description  try to take over the world!
// @author       You
// @match        https://www.infoseek.co.jp/
// @downloadURL https://github.com/tyanbara/js_study/raw/master/infoseek.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/infoseek.user.js
// @grant        none
// ==/UserScript==


var cnt = 0
setInterval(function () {

    if (typeof ISTA_conbarIslot.playLot === 'function') {
        ISTA_conbarIslot.playLot()
        console.log(typeof ISTA_conbarIslot.playLot)
    }

    var closer;
    if (cnt > 10) {
        if (/Chrome/i.test(navigator.userAgent)) {
            console.log("chrome");
            closer = window.close();
            if (closer == undefined) {
                closer = window.open('about:blank', '_self').close();
            }
        } else {
            closer = window.open('about:blank', '_self').close();
            console.log("firefox");
        }
    }
    cnt = cnt + 1
}, 1000); // setInterval
