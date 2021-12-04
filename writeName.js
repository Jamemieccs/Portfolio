var myName = "Kridsada Khongkarat";
var speed = 100;
var i = 0;
function writeName() {
    if(i < myName.length) {
        document.getElementById("home-name").innerHTML+=myName.charAt(i);
        i++;
        setTimeout(writeName, speed);
    }
}
