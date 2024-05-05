let open_menu = document.querySelector('.open_menu');
let menu = document.querySelector('.menu');
let close_menu = document.querySelector('.close_menu');

open_menu.addEventListener('click', () => {
    menu.classList.add('active')
})
close_menu.addEventListener('click', () => {
    menu.classList.remove('active')
})