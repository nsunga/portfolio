$(document).ready(function() {
  var navLocation, scrollBarLocation = 0;

  navLocation = $('#section_header').offset().top;

  $('#section_header').wrap('<div class="nav-placeholder"></div>'); // play with this class. Seems unnecessary, use ID instead
  $('.nav-placeholder').height($('#section_header').outerHeight()); // read this code

  $(window).scroll(function() {
    scrollBarLocation = $(window).scrollTop();

    if (scrollBarLocation >= navLocation) {
      $('#section_header').addClass('fixed');
    } else {
      $('#section_header').removeClass('fixed');
    }
  })

  // skill bars
  $('#skill_JS').simpleSkillbar({
    width: 80,
    background: "#33C3F0"
  });
  $('#skill_jQuery').css('margin-top', '20px');
  $('#skill_jQuery').simpleSkillbar({
    width: 75,
    background: "#33C3F0"
  });
  $('#skill_Java').css('margin-top', '20px');
  $('#skill_Java').simpleSkillbar({
    width: 90,
    background: "#33C3F0"
  });
  $('#skill_OCaml').css('margin-top', '20px');
  $('#skill_OCaml').simpleSkillbar({
    width: 60,
    background: "#33C3F0"
  });
  $('#skill_SQL').css('margin-top', '20px');
  $('#skill_SQL').simpleSkillbar({
    width: 65,
    background: "#33C3F0"
  });

  $('.projects').hide();
  $('.projects-button').on('click', function(){
    $(this).next().slideToggle(900);
    $(this).toggleClass('active');
  });
});

// I think i got eeeeeeeem!
