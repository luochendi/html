$(function() {
    $(".checkbox").click(function () {
        $(this).toggleClass("checked");
    });

    $(".radio").click(function () {
        if ($(this).hasClass("checked"))
            return;
        else {
            $(this).addClass("checked").siblings(".radio").removeClass("checked");
        }
    });

    $("#new").hide();
    $("#edit").hide();
    $("#mid-bg").hide();

});

$(".edit-header  button,.new-header  button").click(function(){
    $("#edit").hide();
    $("#new").hide();
    $("#mid-bg").hide();
});

$(".btn-a").click(function(){
    $("#edit").hide();
    $("#new").show();
    $("#mid-bg").show();
});

$(".btn-m").click(function(){
    $("#edit").show();
    $("#new").hide();
    $("#mid-bg").show();
});
/*
var div1 = document.getElementById("new");
var div2 = document.getElementById("edit");
var div3 = document.getElementById("mid-bg");


function add() {
    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "block";
}

function edit() {
    div1.style.display = "none";
    div2.style.display = "block";
    div3.style.display = "block";
}
//        $("#btn-close").click(function(){
//            div1.style.display = "none";
//            div2.style.display = "none";
//        });

function closeForm() {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
}
*/



















