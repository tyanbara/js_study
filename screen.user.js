// ==UserScript==
// @name         screen
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  try to take over the world!
// @author       You
// @match        https://web.screen.rakuten.co.jp/app

// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js

// @downloadURL https://github.com/tyanbara/js_study/raw/master/screen.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/screen.user.js
// @grant        none
// ==/UserScript==


// $(document).ready(function () {

window.onload = function () {
    // jQuery(window).on('load', function ($) {
    //    function  {

    // setInterval(function () {

    setTimeout(function () {
        console.log('start');
        var btm_lst = document.getElementsByClassName('f4 itemButton');
        var btm_lst_n = btm_lst.length;

        var test = document.getElementsByClassName('card flex flex-column width100');

        var hold_num = -1;
        for (var i = 0; i < btm_lst.length; i++) {
            console.log(btm_lst[i].textContent);
            if ('1ポイント' == btm_lst[i].textContent) {
                hold_num = i;
                break;
            }
        }

        if (hold_num != -1) {
            console.log('click');
            // var event = document.createEvent("MouseEvents"); // イベントオブジェクトを作成
            // event.initEvent("click", false, true); // イベントの内容を設定
            // btm_lst[hold_num].dispatchEvent(event);
            // btm_lst[hold_num].click();
            // test[hold_num].click();

            var rect = btm_lst[hold_num].getBoundingClientRect();
            var position = rect.top - 600;    // 一番上からの位置を取得
            scrollTo(0, position);

        }
    }, 5000); // setInterval
}
    // )


