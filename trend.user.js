// ==UserScript==
// @name         trend
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://02.api.screen.rakuten.co.jp/1/trendResearch*

// @grant        none
// ==/UserScript==


//window.onload = function(){
setInterval(function () {
    var randNum = Math.floor(Math.random() * (4 - 1) + 1);
    var owari = document.getElementsByClassName('errorDescription').length;
    var bbb = document.getElementsByClassName('bg-warning').length
    if (typeof selectAnswer == 'function') {
        console.log('1:関数実行可');
        selectAnswer(randNum)
        console.log("randNum " + randNum)
    } else if (bbb > 0) {
        location.href = 'https://02.api.screen.rakuten.co.jp/1/trendResearch'
    } else if (owari > 0) {
        console.log("owari")
        var closer = window.close();
        if (closer == undefined) {
            closer = window.open('about:blank', '_self').close();
        }
    } else {
        console.log('1:関数実行不可');
        //var opener = window.open('https://02.api.screen.rakuten.co.jp/1/trendResearch', '_self')
    }



    console.log("owari " + owari)
    console.log("bbb " + bbb)



}, 5000); // setInterval

//}