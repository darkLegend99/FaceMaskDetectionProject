var btnRegister =  document.getElementById("btnRegister");
btnRegister.onclick = function() {
    window.location.href = "/http://127.0.0.1:5500/submitted.html"
}

$(document).ready(function() {
    $("button").css("color","white")
})

$("card").hover(function(){
    $(this).css("background-color", "yellow");
    });
 