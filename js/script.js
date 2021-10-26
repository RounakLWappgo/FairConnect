function display_ct6() {
    var x = new Date();
    var ampm = x.getHours() >= 12 ? " PM" : " AM";
    hours = x.getHours() % 12;
    hours = hours ? hours : 12;
    var x1 = x.getDate() + "/" + (x.getMonth() + 1) + "/" + x.getFullYear();
    var x2 =
        hours +
        ":" +
        x.getMinutes() +
        ":" +
        x.getSeconds() +
        ":" +
        ampm;
    document.getElementById("ct6").innerHTML = x1;
    document.getElementById("ct5").innerHTML = x2;
    display_c6();
}
function display_c6() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout("display_ct6()", refresh);
}
display_c6();