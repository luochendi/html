$(document).ready(function() {
    $(".child2").hide();
    $("#mid-pbg").hide();

    $(".mid-center a").click(function(){
        var _src = $(this).attr("frame-src");
        $("#frame").attr("src",_src);
        $(this).addClass("active").siblings("a").removeClass("active");
    });

    $(".exit,.pic-exit").click(function(){
        window.location.href = "login.html";
    });


});

