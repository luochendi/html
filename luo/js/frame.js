$(document).ready(function() {
    $(".child2").hide();
    $("#mid-pbg").hide();

    // $(".user").click(function () {
    //     $(".child1").hide();
    //     $(".child2").show();
    //     $(".ma  img").attr("src", "imgs/manage/manage1.png");
    //     $(".us  img").attr("src", "imgs/manage/user2.png");
    // });
    // $(".manage").click(function () {
    //     $(".child2").hide();
    //     $(".child1").show();
    //     $(".ma  img").attr("src", "imgs/manage/manage2.png");
    //     $(".us  img").attr("src", "imgs/manage/user1.png");
    // });

    $(".mid-center a").click(function(){
        var _src = $(this).attr("frame-src");
        $("#frame").attr("src",_src);
        $(this).addClass("active").siblings("a").removeClass("active");
    });

    $(".exit,.pic-exit").click(function(){
        window.location.href = "login.html";
    });
});

