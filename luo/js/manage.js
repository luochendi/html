$(function() {

    $(".checkbox").click(function () {
        $(this).toggleClass("checked");
    });

    loadTr();

    $(".radio").click(function () {
        if($(this).hasClass("checked"))
            return;
        else
        {
            $(this).addClass("checked").siblings(".radio").removeClass("checked");
        }
    });

    function loadTr() {
        for (var i = 0; i < 10; i++) {
            $("#tbody").append("<tr > <td ><a  class=\"checkbox\"></a>江苏微睿特信息科技有限公司</td> <td>微睿微睿特微睿信息巡检管理系统</td><td>巡检、签到</td><td>张某某、李某某、徐某某、成某某、周某某、张某某</td><td>未激活</td></tr>");
        }
    }
});

var div1 = document.getElementById("edit");
var div2 = document.getElementById("mid-bg");
function add()
{
    div1.style.display = "block";
    div2.style.display = "block";
}
//        $("#btn-close").click(function(){
//            div1.style.display = "none";
//            div2.style.display = "none";
//        });

function closeForm() {
    div1.style.display = "none";
    div2.style.display = "none";
}
