
function my_window_close() {
    var closer;
    if (/Chrome/i.test(navigator.userAgent)) {
        console.log("chrome");
        closer = window.close();
        if (closer == undefined) {
            closer = window.open('about:blank', '_self').close();
        } else {
            window.close();
        }
    } else {
        closer = window.open('about:blank', '_self').close();
        console.log("firefox");
    }
}