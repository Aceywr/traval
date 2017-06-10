$(document).ready(function(){
    $(".btn_right").click(function () {
        $(".main").animate({left: "-90%"},"slow");
    });
    $(".btn_left").click(function () {
        $(".main").animate({left: "0"},"slow");
    });

    function traval_shadow (n,i) {
        $("#part_"+n+"_"+i).mouseenter(function () {
            $("#intro_"+n+"_"+i).animate({top:"0"},"fast");
        });
        $("#part_"+n+"_"+i).mouseleave(function () {
            $("#intro_"+n+"_"+i).animate({top:"70%"},"fast");
        });
    }
    for (var n = 1; n <= 2; n++) {
        for (var i = 1; i <= 4; i++) {
            traval_shadow(n,i);
        }
    }
    
    
    
});