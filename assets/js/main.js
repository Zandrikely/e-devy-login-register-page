/** isValidMail
* @param (user's mail)
* @return true or false
*/
function isValidMail(input_mail) {
    return /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{1,6}$/.test(input_mail.toLowerCase());
}
/** isValidPhoneNumber
* @param (user's phone number)
* @return true or false
*/
function isValidPhoneNumber(input_phone) {
    return /^032|033|034|039[ .-]?[0-9]{2}[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?$/.test(input_phone);
}
/** isValidCIN
* @param (user's cin)
* @return true or false
*/
function isValidCIN(input_cin) {
    return /^[0-9]{3}[ .-]?[0-9]{3}[ .-]?[0-9]{3}[ .-]?[0-9]{3}[ .-]?$/.test(input_cin);
}
/** checkPassword
* @param (user's password)
* @return strong or medium or weak
*/
function checkPassword(input_password){
    let result;
    if ((input_password.length>=8 && input_password.match(/[a-z]/g) && input_password.match(/[A-Z]/g) && input_password.match(/[0-9]/g && input_password.match(/[\!\^\$\(\)\[\]\{\}\?\+\*\.\/\\\|&é#èçà@%ùâêî]/g))) || input_password.length>=15) {
        result = "strong";
    }else if ((input_password.length>=6 && input_password.match(/[a-z]/g) && input_password.match(/[A-Z]/g) && input_password.match(/[0-9]/g)) || input_password.length>=10) {
        result = "medium";
    }else{
        result = "weak";
    }
    return result;
}
/** showPassword
*/ 
function showPassword()
{
    var eye = document.getElementById('eye');
    var input_password = document.getElementById('password');
    var type = input_password.getAttribute('type');
    if (type == "password") {
        eye.className = "fa fa-eye-slash";
        input_password.setAttribute('type', 'text');
    }else if (type == "text") {
        eye.className = "fa fa-eye";
        input_password.setAttribute('type', 'password');
    }
}
/** showLoginPage
*/
function showLoginPage() {
    $("#result_page").empty();
    $("#result_page").append(login_page); //app.js
}
/** showRegisterPage
*/
function showRegisterPage() {
    $("#result_page").empty();
    $("#result_page").append(register_page); //app.js
}
/** verifyFirstname
*/
function verifyFirstname() {
    $("#firstname").blur(function(){
        if ($("#firstname").val().length >= 3 && $("#firstname").val().length <= 15) {
            $("#alert-firstname").addClass("alert-success");
            $("#alert-firstname").removeClass("alert-warning");
            $("#alert-firstname").html("Your firstname is : valid");
        }else{
            $("#alert-firstname").addClass("alert-warning");
            $("#alert-firstname").html("Firstname's length shoud 3 - 15");
        }
    })
}
/** verifyPhoneNumber
*/
function verifyPhoneNumber() {
    $("#phone").keyup(function(){
        this.value = this.value.replace(/(\d{3}) ?(\d{2}) ?(\d{3}) ?(\d{2}) ?/,'$1 $2 $3 $4');
    })
    $("#phone").blur(function(){
        if (isValidPhoneNumber($("#phone").val())) {
            $("#alert-phone").addClass("alert-success");
            $("#alert-phone").removeClass("alert-warning");
            $("#alert-phone").html("Your phone number is : valid");
        }else{
            $("#alert-phone").addClass("alert-warning");
            $("#alert-phone").html("Your phone number is : invalid");
        }
    })
}
/** verifyCIN
*/
function verifyCIN() {
    $("#cin").keyup(function(){
        this.value = this.value.replace(/(\d{3}) ?(\d{3}) ?(\d{3}) ?(\d{3}) ?/,'$1 $2 $3 $4');
    })
    $("#cin").blur(function(){
        if (isValidCIN($("#cin").val())) {
            $("#alert-cin").addClass("alert-success");
            $("#alert-cin").removeClass("alert-warning");
            $("#alert-cin").html("Your cin is : valid");
        }else{
            $("#alert-cin").addClass("alert-warning");
            $("#alert-cin").html("Your cin is : invalid");
        }
    })
}
/** verifyMail
*/
function verifyMail() {
    $("#mail").blur(function(){
        if(isValidMail($("#mail").val())){
            $("#alert-mail").addClass("alert-success");
            $("#alert-mail").removeClass("alert-warning");
            $("#alert-mail").html("Your adress email is : valid");
        }else{
            $("#alert-mail").addClass("alert-warning");
            $("#alert-mail").html("Your adress email is : invalid");
        } 
    })
}
/** verifyPassword
*/
function verifyPassword() {
    $("#password").keypress(function(){
        if(checkPassword($("#password").val())=="strong"){
            $("#alert-password").addClass("alert-success");
            $("#alert-password").removeClass("alert-warning");
            $("#alert-password").html("Your password is : Strong");
        }else if(checkPassword($("#password").val())=="medium"){
            $("#alert-password").addClass("alert-warning");
            $("#alert-password").removeClass("alert-danger");
            $("#alert-password").html("Your password is : Medium");
        }else{
            $("#alert-password").addClass("alert-danger");
            $("#alert-password").html("Your password is : Weak");
        } 
    })
}


$(function(){
    // login
    showLoginPage();
    verifyMail();
    verifyPassword();
    $("#switch_to_register").click(function() {  //register
        showRegisterPage();
        verifyFirstname();
        verifyPhoneNumber();
        verifyCIN();
        verifyMail();
        verifyPassword();
    })
});

