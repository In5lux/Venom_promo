const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-menu');
const menuClose = document.querySelector('.menu-close');
menuButton.addEventListener('click', () => {
  navMenu.classList.add('menu-active');
  menuClose.classList.add('menu-active');
  menuClose.addEventListener('click', () => {
    navMenu.classList.remove('menu-active');
    menuClose.classList.remove('menu-active');
  })

})
