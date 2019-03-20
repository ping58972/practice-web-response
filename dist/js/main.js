//select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial State of menu
let showMenu = true;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(showMenu){
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuNav.classList.add('show')
        menuBranding.classList.add('show')
        navItems.forEach(element => element.classList.add('show'));

        //Set menu state
        showMenu = false;
    } else{
        

        menuBtn.classList.remove('close')
        menu.classList.remove('show')
        menuNav.classList.remove('show')
        menuBranding.classList.remove('show')
        navItems.forEach(element => element.classList.remove('show'));

        //Set menu state
        showMenu = true;
    }
}
