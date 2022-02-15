const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const modalButtons = document.querySelectorAll('.modal-button');
const modal = document.querySelector('.modal');
const modalClose = modal.querySelector('.modal__close');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

modalButtons.forEach((button) => {
  button.addEventListener('click', modalOpen);
});

function modalOpen(evt) {
  evt.preventDefault(evt);
  modal.style.display = 'block';
};

modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.style.display = 'none';
})
