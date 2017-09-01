$(document).ready(function() {
  var madmaan_img = $("#madmaan_img");
  var boxes_img = $("#boxes_img");
  var gif_img = $("#gif_img");
  var outfits_img = $("#outfits_img");

  $("#madmaan_txt").css("color", "white");
  $("#madmaan_txt").css({top: madmaan_img.height()/2 - 20, left: madmaan_img.width()/2 - 20, position:'absolute'});
  $("#boxes_txt").css("color", "white");
  $("#boxes_txt").css({top: boxes_img.height()/2 - 20, left: boxes_img.width()/2 - 20, position:'absolute'});
  $("#gif_txt").css("color", "white");
  $("#gif_txt").css({top: gif_img.height()/2 - 20, left: gif_img.width()/2 - 20, position:'absolute'});
  $("#outfits_txt").css("color", "white");
  $("#outfits_txt").css({top: outfits_img.height()/2 - 20, left: outfits_img.width()/2 - 20, position:'absolute'});

  // GETTING SOMEWHERE. Look into the 'absolute' property
  var mPos = $("#madmaan_txt").position();
  console.log(mPos.left);
  console.log(mPos.top);
  console.log('image height: ' + madmaan_img.height());
  console.log('image width: ' + madmaan_img.width());

});
