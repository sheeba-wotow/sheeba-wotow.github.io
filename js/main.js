$(document).ready(function() {

  $(window).on('resize', function(){
    resize();
  });

  $(window).on('load', function(){
    resize();
  });

  function resize() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    $('.coming-soon-left').css({height:windowHeight});
    $('.coming-soon-right').css({height:windowHeight});
    $('.logo-centre').css({height:windowHeight});
  }
});
