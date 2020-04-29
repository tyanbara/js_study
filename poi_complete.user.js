// ==UserScript==
// @name         poi_complete
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pointmail.rakuten.co.jp/point/kezulot
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant        none
// ==/UserScript==

window.onload = function(){
    var clickMe = document.getElementById("kezulot-btn");
    var event = document.createEvent( "MouseEvents" ); // イベントオブジェクトを作成
    event.initEvent("click", false, true); // イベントの内容を設定
    clickMe.dispatchEvent(event);
}


