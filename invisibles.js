$(document).ready(function() {
  $('.emp').hide();
  $('.text-button').on('click', function(){
    $(this).next().slideToggle(500);
    $(this).toggleClass('active');
  });
});
