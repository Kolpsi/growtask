const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const modalButton = document.querySelector('.modal-button');
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

modalButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.style.display = 'block';
})

modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.style.display = 'none';
})

$(document).ready(function(){
  $(".slide-one").owlCarousel({
    loop: true,
      nav:true,
      responsive: {
       0:{
            items:1,
            navText: ["", "<img src='../img/button-next.svg'>"]
        },
        1200:{
            items:3,
            nav:true,
            navText: ["<img src='../img/button-next.svg'>", "<img src='../img/button-next.svg'>"]
        }
      }
    });
    $(".slide-two").owlCarousel({
      loop: true,
        nav:true,
        responsive: {
         0:{
              items:1,
              navText: ["<img src='../img/card-back.svg'>", "<img src='../img/card-next.svg'>"],
              stagePadding: 50,
              margin: 20
          },
          1200:{
              items:3,
              nav:true,
              navText: ["<img src='../img/button-next.svg'>", "<img src='../img/button-next.svg'>"]
          }
        }
      });
});