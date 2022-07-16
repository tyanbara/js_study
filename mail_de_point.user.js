// ==UserScript==
// @name         mail_de_point
// @namespace    http://tampermonkey.net/
// @version      0.0.0
// @description  try to take over the world!
// @author       You
// @match        https://member.pointmail.rakuten.co.jp/box


// @downloadURL https://github.com/tyanbara/js_study/raw/master/mail_de_point.user.js
// @updateURL   https://github.com/tyanbara/js_study/raw/master/mail_de_point.user.js

// @require      https://github.com/tyanbara/js_study/raw/master/window_close.user.js

// @grant        none
// ==/UserScript==



var delay_time = 3 * 1000;



// window.onload = function () {
	setTimeout(function () {
		var clickMe = document.getElementsByClassName("pointNotGetCount");
        if (clickMe[0].length == '0') {
			console.log('mail_0');
            // consle.log(clickMe2)
            // my_window_close();
        }

		// console.log('OK_click');
        // console.log(clickMe[0].length );
		// console.log('OK_click');
        if(clickMe == null){
        }else if(clickMe[0].innerText == "0件"){
            console.log('OK_click!!!!');
            my_window_close();
        }
		// console.log(clickMe);
		// clickMe.dispatchEvent(event);
		// clickMe.click();


	}, delay_time);
//  };
// });

