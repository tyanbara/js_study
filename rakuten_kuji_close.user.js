// ==UserScript==
// @name         rakuten_kuji_close
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You

// @match        https://kuji.rakuten.co.jp/*/already
// @match        https://kuji.rakuten.co.jp/*/lose
// @match        https://kuji.rakuten.co.jp/*/close
// @match        https://kuji.rakuten.co.jp/*/win
// @match        https://kuji.rakuten.co.jp/root/*

// @match        https://viber.co.jp/news/viber_kuji/*
// @match        https://edy.rakuten.co.jp/campaign/2019/0124_spluckykuji*

// @match        https://kuji.rakuten.co.jp/c6c117713*
// @match        https://infoseek.kantangame.com/easygame*

// @match        https://app.kuji.rakuten.co.jp/campaign/intro/*
// @match        https://game.infoseek.co.jp/game*
// @match        https://edy.rakuten.co.jp/campaign/other/edy/spluckykuji*
// @match        https://www.rakuten-card.co.jp/point/pointsave/luckylots*
// @match        https://point.rakuten.co.jp/doc/app/pc/pointclub_app/index.html*
// @match        https://pointmail.rakuten.co.jp/point/kezulot/blank


// @match        https://woman.infoseek.co.jp/shopping/coupon*
// @match        https://quiz.infoseek.co.jp
// @match        https://beauty.rakuten.co.jp/cnt/topics/campaign/coupon*
// @match        https://www.infoseek.co.jp/?scid=*

// @match        https://www.infoseek.co.jp/Luckylot/result
// @match        https://checkout.rakuten.co.jp/shopping/*scid*
// @match        https://travel.rakuten.co.jp/*scid*
// @match        https://travel.rakuten.co.jp/movement/fukushima/201907/?scid=*
// @match        https://delivery.rakuten.co.jp/?scid=*
// @match        https://point-g.rakuten.co.jp/campaign/*
// @match        https://point-g.rakuten.co.jp/campaign*

// @grant        none
// ==/UserScript==


//window.onload = function(){
//$(document).ready(function() {
    //var closer = window.open('about:blank','_self').close()
    setInterval(function(){
        // var closer = window.open('about:blank','_self').close()
        var closer;
        if (/Chrome/i.test(navigator.userAgent)){
            console.log("chrome");
            closer = window.close();
            if(closer == undefined){
                closer = window.open('about:blank','_self').close();
            }else{
                window.close();
            }
        //}
        }else{
            closer = window.open('about:blank', '_self').close();
            console.log("firefox");
        }
    },  1000); // setInterval

//});

//};
