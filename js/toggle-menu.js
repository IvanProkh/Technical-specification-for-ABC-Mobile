function toggleMenu() {
  document.getElementsByClassName('header')[0].classList.toggle('close-menu');
  document.getElementsByClassName('burger-btn__close')[0].classList.toggle('hidden');
}

function toggleDropdown() {
  document.getElementsByClassName('hero__button-dropdown')[0].classList.toggle('active');
  document.getElementsByClassName('info')[0].classList.toggle('close-info');
}
