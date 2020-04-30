// ==UserScript==
// @name         screen
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://web.screen.rakuten.co.jp/app

// @downloadURL https://github.com/tyanbara/js_study/raw/master/screen.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/screen.user.js
// @grant        none
// ==/UserScript==


window.onload = function () {

    console.log('start');
    var btm_lst = document.getElementsByClassName('f4 itemButton');
    var btm_lst_n = btm_lst.length;

    var hold_num = -1;
    for (var i; i < btm_lst.length; i++) {
        console.log(btm_lst.length[i].textContent);
        if ('1ポイント' == btm_lst.length[i].textContent) {
            hold_num = i;
            break;
        }
    }

    if (hold_num > 0) {
        var event = document.createEvent("MouseEvents"); // イベントオブジェクトを作成
        event.initEvent("click", false, true); // イベントの内容を設定
        btm_lst[hold_num].dispatchEvent(event);
    }
}
