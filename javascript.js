document.querySelector("input").addEventListener("click",function(){
    document.querySelector(".error_msg").classList.remove("error_msg_show");
    document.querySelector(".error_img").classList.remove("error_img_show");
    document.querySelector("form").classList.remove("form_error");
});

function validate(){
    // REGEX FOR EMAIL VALIDATION
    var pattern=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z][a-zA-Z]$/;
    var id=document.querySelector("input").value;
    if(id=="" || (id.match(pattern))==null){
        document.querySelector(".error_msg").classList.add("error_msg_show");
        document.querySelector(".error_img").classList.add("error_img_show");
        document.querySelector("form").classList.add("form_error");
    }
    else{
        alert("submitted");
        location.reload();
    }
}