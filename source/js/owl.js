/**
 * @description модуль активации и настройки карусели
 */
$(document).ready(function () {
  $(".slide-one").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        navText: ["", "<img  class='nav-next'>"]
      },
      1200: {
        items: 1,
        navText: ["<img  class='nav-prev'>", "<img  class='nav-next'>"],
        stagePadding: 310,
        margin: -70
      }
    }
  });
  $(".slide-two").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        navText: ["<img  class='nav-prev'>", "<img  class='nav-next'>"],
        stagePadding: 50,
        margin: 20
      },
      1200: {
        items: 3,
        nav: true,
        navText: ["<img class='nav-prev'>", "<img  class='nav-next'>"]
      }
    }
  });
});
