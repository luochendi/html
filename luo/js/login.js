$(function() {
    $(".error").hide();
    $(".btn").click(function () {
        var accNode = $("#account");
        var pswNode = $("#psw");
        var acc = accNode.val();
        var psw = pswNode.val();
        if(acc == "admin"&&psw == "admin"){
            window.location.href = "frame.html";
        }
        else{
            $(".error").show();
        }
    });

});

