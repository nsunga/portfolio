$(document).ready(function() {
  var navbar = $("#nav_section");
  var offset_nav = navbar.offset().top;

  navbar.wrap('<div class="wrapper-div"></div>');
  $('.wrapper-div').height(navbar.outerHeight());
  //IM OUT OF IDEAS. STILL JUMPS AROUND EVEN WITH WRAPPER. TRY ADDING ANOTHER WRAPPER?

  $(window).scroll(function() {
    var pos_scrollBar = $(window).scrollTop();

    if (pos_scrollBar >= offset_nav) {
      navbar.addClass("fixed");
      //navbar.css("margin-top", "0px");
    } else {
      navbar.removeClass("fixed");
      //navbar.css("margin-top", "10px");
    }
  });
});
