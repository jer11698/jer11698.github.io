$(document).ready(function () {
  let nav_offset_top = $(".header-style").height() + 50;

  function navbarFixed() {
    if ($(".header-style").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header-style .menu").addClass("navbar_fixed");
        } else {
          $(".header-style .menu").removeClass("navbar_fixed");
        }
      });
    }
  }

  navbarFixed();
});
