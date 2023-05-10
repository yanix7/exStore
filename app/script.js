$(document).ready(function () {
  $('.carousel-inner').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/Vector (1).png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/Vector.png" alt=""></button>',
  });


  $('.carousel-teams').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/Vector (1).png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/Vector.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});




$(document).ready(function () {
  $('.header-burger, .active').click(function (event) {
    $('.header-burger, .nav_list').toggleClass('active');
  });
});

