window.onscroll = () => {headerScrolled()};

headerScrolled = () => {
    const headerBar = document.getElementById('header');
    const headerItems = document.querySelectorAll('#navbar a');
    const headerLogo = document.getElementById('header-logo');

    if (document.documentElement.scrollTop > 100) {
        headerBar.classList.add('scrolled');
        headerLogo.classList.add('scrolled-img');

        for (let i = 0; i < headerItems.length; i++ ) {
            const itemsClass = headerItems[i];
            itemsClass.classList.add('items-scrolled');
        }

    } else {
        headerBar.classList.remove('scrolled');
        headerLogo.classList.remove('scrolled-img');

        for (let i = 0; i < headerItems.length; i++ ) {
            const itemsClass = headerItems[i];
            itemsClass.classList.remove('items-scrolled');
        }

    }
}

function testjs() {
    document.getElementById('text').innerHTML="JS Work!";
}

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