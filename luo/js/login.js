$(function() {
    // $(".error").hide();

    $(".btn").click(function () {
        // else{
        //     $(".error").show();
        // }
        // $.ajax({
        //     url:"login.jsp",
        //     data:{
        //         acc:acc,
        //         psw:psw
        //     },
        //     type:"POST",
        //     success:function(data){
        //
        //     },
        //     error:function(){
        //
        //     }
        // })
        var acc = $("#account").val();
        var psw = $("#psw").val();
        if(!acc){
            $("#v-acc").html("用户名不能为空！");
            return;
        }
        else{
            $("#v-acc").html("");
        }

        if(psw==""){
            $("#v-psw").html("密码不能为空！");
            return;
        }
        else{
            $("#v-psw").html("");
        }

        if(acc == "admin"&&psw == "admin"){
            window.location.href = "frame.html";
        }
        else{
            alert("用户名或密码不正确！");
        }
        })
});


// $.fn.GetSelect = function()
// {
//     var ui = $(this).find("ul");
//     return ul.find("li.active").attr("data-id");
// }

























