// ==UserScript==
// @name         rakuten_search_ref2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://websearch.rakuten.co.jp/Web*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js

// @downloadURL https://github.com/tyanbara/js_study/raw/master/rakuten_search_ref2.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/rakuten_search_ref2.user.js
// @grant        none
// ==/UserScript==

//window.onload = function () {
    jQuery(window).on('load', function ($) {

        var array1 = new Array('リンゴ',
            'バナナ',
            'イチゴ',
            'アマゾン',
            'あめぶろ',
            'ana',
            'ようつべ',
            'pone',
            '福島',
            'お米',
            '金券',
            'テスト',
            '靴',
            '福沢諭吉',
            '渋沢栄一',
            'クレヨン',
            'ラッパ',
            'ヒップホップ',
            'お茶',
            'ジュース',
            'コカコーラ',
            '新発売',
            'せんべろ',
            '身の丈',
            '惚気る',
            'マスト',
            '臨む',
            'レガシー',
            '容体',
            'フレア',
            'クリーニング手術',
            '憮然',
            'マナー',
            'やさぐれる',
            'フルムーン',
            '夜の帳',
            '火中の栗を拾う',
            '計る',
            '以て',
            '目処',
            '烙印を押される',
            '軈て',
            'ビックリマン');
    
        var delay_time = 10000;
    
        setInterval(function () {
            var clickMe = document.getElementById("searchBtn");
            // var event = document.createEvent("MouseEvents"); // イベントオブジェクトを作成
            // event.initEvent("click", false, true); // イベントの内容を設定
    
    
            var result = document.getElementById("srchformtxt_qt");
    
            var num_txt = document.getElementById("curr-kuchisu-count");
    
            var num_txt2 = document.getElementsByClassName('KuchisuBar-module__progressCounter1__1NVVE')
    
            console.log(num_txt2[0].innerText);
    
            if (num_txt2[0].innerText == "30") {
                var closer = window.open('about:blank', '_self').close()
            }
    
            console.log(result.value)
    
            var min = 0;
            var max = array1.length - 1;
            var i = Math.floor(Math.random() * (max));
            var next_srch = array1[i]
            console.log(i)
            result.value = next_srch;
    
            // clickMe.dispatchEvent(event);
            clickMe.click();
        }, 5000); // setInterval
    
    }
    );
    
    