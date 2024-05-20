let fullName = document.getElementById("fullname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let error = document.getElementById("errorname");
let flag = 1;

function formValidation(){
    if(fullName.value == ""){
        document.getElementById("errorname").innerText = "username is empty";
        flag = 0;
    }else 
    if(fullName.value.length <= 5){
        document.getElementById("errorname").innerText = "please enter min 5 char "
        flag = 0;
    }else{
        document.getElementById("errorname").innerText = "";
        flag = 1;
    }
    //-----------------------
    if(email.value == ""){
       document.getElementById("erroremail").innerText = "email is empty ";
       flag = 0;
    }else 
    if(email.value.length <= 5){
        document.getElementById("erroremail").innerText = " invalid email";
        flag = 0;
    }else{
        document.getElementById("erroremail").innerText = "";
        flag = 1;
    }
    //------------------------
    if(password.value == ""){
        document.getElementById("errorpassword").innerText = " password is empty";
        flag =0;

    }else if(password.value.length <= 4){
        document.getElementById("errorpassword").innerText = " invalid password";
        flag = 0;
    }else{
        document.getElementById("errorpassword").innerText = "";
        flag  = 1;
    }
    if(flag){
        return true;
    }else{
        return false;
    }

}