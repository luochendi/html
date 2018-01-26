$(function() {

    loadTr();

    function loadTr() {
        for (var i = 0; i < 10; i++) {
            $("#tbody").append("<tr > <td ><a  class=\"checkbox\"></a>江苏微睿特信息科技有限公司</td> <td>微睿微睿特微睿信息巡检管理系统</td><td>巡检、签到</td><td>张某某、李某某、徐某某、成某某、周某某、张某某</td><td>未激活</td></tr>");
        }
    }

    $(".manage").click(function(){
        window.location.href = "child1.html";
    });
});





