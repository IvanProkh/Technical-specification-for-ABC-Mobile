const info = document.getElementsByClassName('info')[0];
const button = document.getElementsByClassName('hero__button-dropdown')[0];

let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  let currentScrollPos = window.pageYOffset;
  console.log('currentScrollPos:', currentScrollPos);
  console.log('prevScrollPos:', prevScrollPos);

  if (prevScrollPos < currentScrollPos && info.classList.contains('close-info')) {
    info.classList.remove('close-info');
    button.classList.add('active');
  } else {
    prevScrollPos = currentScrollPos;
  }

  console.log(!button.classList.contains('active'), 'dsdd');

  window.addEventListener('click', () => {
    if (!button.classList.contains('active') && currentScrollPos > 0) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  });
});
