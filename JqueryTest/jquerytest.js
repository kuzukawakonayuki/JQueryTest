$(function() {
  $("#text").click(function() {
    $(this).text("oncliclk!!");
  }).mouseover(function() {
    $(this).text("mouseover!!")
  });
});

$(function() {
  $(".class_text").click(function() {
    $(this).text("class_oncliclk!!");
  })
});

$(function() {
  $("div p").click(function() {
    $(this).text("<div><p>_oncliclk!!");
  });
});

$(function(){
  $("input").focus(function(){
    $("input").css('background-color', '#ffff00')
  }).blur(function(){
    $("input").css('background-color', '#ffffff')
  });
});

$(function(){

  $("#A").mouseover(function () {
    $(this).css("background-color","#d0f032");
  }).mouseout(function () {
    $(this).css("background-color","#ffffff")
  });

  $("#B").mouseover(function () {
    $(this).css("background-color","#f4a93a");
  }).mouseout(function () {
    $(this).fadeOut("slow");
  });

  $("#C").mouseover(function () {
    $(this).css("background-color","#43f6fb");
  }).mouseout(function () {
    $(this).css("margin-left","200px");
  });

  $("#D").mouseover(function () {
    $(this).css("background-color","#f67979");
  }).mouseout(function () {
    $(this).css('width','40px').css('height','40px');
  });
});

$(function(){
  $("#new_x").click(function () {
    $("#new_x").after('<div id="x">X</div>');
  });
});
