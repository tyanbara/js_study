// ==UserScript==
// @name         screen_close
// @namespace    http://tampermonkey.net/
// @version      0.11.6
// @description  try to take over the world!
// @author       You

// @match       https://02.api.screen.rakuten.co.jp/1/adwall*
// @match       https://pasha.rakuten.co.jp/today*
// @match       https://screen.rakuten.co.jp/special/app_today/*
// @match       https://screen.rakuten.co.jp/adwall*
// @match       https://screen.rakuten.co.jp/reward*

// @downloadURL https://github.com/tyanbara/js_study/raw/master/screen_close.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/screen_close.user.js

// @require      https://github.com/tyanbara/js_study/raw/master/window_close.user.js

// @grant        none

// ==/UserScript==
window.onload = function () {
    setTimeout(function () {
        my_window_close();
    }, 6000);
};

