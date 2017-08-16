$(document).ready(function() {
  var madmaan_img = $("#madmaan_img");
  var imagePos = madmaan_img.position();

  $("#madmaan_txt").css("color", "white");
  //$("#madmaan_txt").parent().css({position: 'relative'});
  $("#madmaan_txt").css({top: imagePos.left, left: imagePos.top, position:'absolute'});
  // GETTING SOMEWHERE. Look into the 'absolute' property
  var mPos = $("#madmaan_txt").position();
  console.log(mPos.left);
  console.log(mPos.top);
  console.log(madmaan_img.position().top);
  console.log(madmaan_img.position().left);

});
