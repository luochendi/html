$(function() {

    $(".checkbox").click(function () {
        $(this).toggleClass("checked");
    });
    $(".radio").click(function () {
        if($(this).hasClass("checked"))
            return;
        else
        {
            $(this).addClass("checked").siblings(".radio").removeClass("checked");
        }
    });

    $("#new").hide();
    $("#mid-bg").hide();

    $(".btn-a").click(function(){
        $("#new").show();
        $("#mid-bg").show();
        $(".ia").show().siblings("img").hide();
    });

    $(".btn-m").click(function(){
        //  $('#mid-bg',window.parent.document).show();
        $("#new").show();
        $("#mid-bg").show();
        $(".ie").show().siblings("img").hide();//同级的img隐藏
        //FormSet(da);
    });

    $(".new-header  button").click(function(){
        $("#new").hide();
        $("#mid-bg").hide();
    });

    $(".exit,.pic-exit").click(function(){
        window.location.href = "login.html";
    });




});