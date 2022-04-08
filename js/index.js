//Бургер меню
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('menuContainer');

btn.addEventListener('click', showMenu);

function showMenu() {
    menu.classList.toggle('menu-show');
    var toggle = document.querySelector('.nav-toggle');
    this.classList.toggle('opened');
}
