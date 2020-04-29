// ==UserScript==
// @name         infoseek_woman
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://woman.infoseek.co.jp

// @grant        none
// ==/UserScript==

var flag = 0
    setInterval(function(){
        if( flag ==1){
            var closer;
            if (/Chrome/i.test(navigator.userAgent)){
                console.log("chrome");
                closer = window.close();
                if(closer == undefined){
                    closer = window.open('about:blank','_self').close();
                }
                //}
            }else{
                closer = window.open('about:blank', '_self').close();
                console.log("firefox");
            }
        }


        var clickMe = document.getElementById("lucky_lot_start");
        var event = document.createEvent( "MouseEvents" ); // イベントオブジェクトを作成
        event.initEvent("click", false, true); // イベントの内容を設定


        console.log(clickMe)
        if(clickMe != null){
            clickMe.dispatchEvent(event);
            flag = 1
        }else{
            flag = 1
        }


    },  5000); // setInterval
