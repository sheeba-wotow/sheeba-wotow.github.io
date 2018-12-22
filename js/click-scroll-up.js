$(function() {
    var header = $("#return-to-top");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 40) {
            header.fadeIn(200);
        } else {
            header.fadeOut(200);
        }
    });
    header.click(function(){
    	$('body,html').animate({
    		scrollTop : 0
    	},500);
    });
});