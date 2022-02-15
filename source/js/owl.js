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