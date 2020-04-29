// ==UserScript==
// @name         woman_kuji
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://woman.infoseek.co.jp/luckykuji/

// @grant        none
// ==/UserScript==

var flag = 0
setInterval(function () {
    // var clickMe = document.getElementsByClassName("womanluckykuji_start");
    var clickMe = document.getElementById("kuji-play-area-start");

    var event = document.createEvent("MouseEvents"); // イベントオブジェクトを作成
    event.initEvent("click", false, true); // イベントの内容を設定

    //kujiPlayBtn.off("click");
    //kujiPlayArea.data("page") = 1;
    var aaaa = document.querySelector('#womanluckykuji_start');
    console.log(aaaa)
    aaaa.click();
    console.log(clickMe)
    if (clickMe != null) {
        clickMe.dispatchEvent(event);
        flag = 1
    } else {
        flag = 1
    }


}, 5000); // setInterval
