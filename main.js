window.scrollto({
  top: 100,
  left: 100,
  behavior: 'smooth'
});

// Back to top button
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

$('.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1500, 'easeInOutExpo');
  return false;
});

// jQuery counterUp
$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 1000
});

// function aos_init() {
//   AOS.init({
//     duration: 1000,
//     easing: "ease-in-out-back",
//     once: true
//   });
// }
// $(window).on('load', function() {
//   aos_init();
// });

