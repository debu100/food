$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".navbar").addClass("nav-change");
    } else {
      $(".navbar").removeClass("nav-change");
    }
  });
});
