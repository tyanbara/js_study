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

    var btm_lst = document.getElementsByClassName('f4 itemButton');
    var btm_lst_n = btm_lst.length;

    for (var i; i < btm_lst.length; i++) {
        console.log(btm_lst.length[i].textContent);
    }


}
