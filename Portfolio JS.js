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

window.onscroll = () => {headerScrolled()};

headerScrolled = () => {
    const headerBar = document.getElementById('header');
    const headerItems = document.querySelectorAll('#navbar a');
    const headerLogo = document.getElementById('header-logo');

    if (document.documentElement.scrollTop > 100) {
        headerBar.classList.add('scrolled');
        headerLogo.classList.add('scrolled-img');

        let l = headerItems.length;
        for (let i = 0; i < l; i++ ) {
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

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    });
});

function openModal(modal){
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}