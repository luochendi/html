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

    loadTr();

    function loadTr() {
        for (var i = 0; i < 10; i++) {
            $("#tbody").append("<tr > <td ><a  class=\"checkbox\"></a>江苏微睿特信息科技有限公司</td> <td>微睿微睿特微睿信息巡检管理系统</td><td>巡检、签到</td><td>张某某、李某某、徐某某、成某某、周某某、张某某</td><td>未激活</td></tr>");
        }
    }

    $("#new").hide();
    $("#mid-bg").hide();

    $(".btn-a").click(function(){
        $("#new").show();
        $("#mid-bg").show();
        $(".ia").show().siblings("img").hide();
        window.top.setBg(1);
    });

    $(".btn-m").click(function(){
        //  $('#mid-bg',window.parent.document).show();
        $("#new").show();
        $("#mid-bg").show();
        $(".ie").show().siblings("img").hide();//同级的img隐藏
        window.top.setBg(1);
        //FormSet(da);
    });

    $(".new-header  button").click(function(){
        $("#new").hide();
        $("#mid-bg").hide();
        window.top.setBg(0);
    });

    $(".user").click(function(){
        window.location.href = "child2.html";
    });

    $(".manage").click(function(){
        window.location.href = "child1.html";
    });

});