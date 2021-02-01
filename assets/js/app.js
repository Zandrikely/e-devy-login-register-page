/** isValidMail
* verify an email
* arg (user's email)
* return true or false
*/
function isValidMail(input_mail) {
	return /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(input_mail.toLowerCase());
}

/** isValidPhoneNumber
* verify a phone number in Madagascar
* arg (user's phone number)
* return true or false
*/
function isValidPhoneNumber(input_phone) {
	return /^032|033|034|039[ .-]?[0-9]{2}[ .-]?[0-9]{3}[ .-]?[0-9]{2}$/.test(input_phone);
}

/** isValidCIN
* verify a CIN
* arg (user's cin)
* return true or false
*/
function isValidCIN(input_cin) {
	return /^[0-9]{3}[ .-]?[0-9]{3}[ .-]?[0-9]{3}[ .-]?[0-9]{3}$/.test(input_cin);
}

/** checkPassword
* verify the length && complexity of a password
* arg (user's password)
* return strong or medium or weak
*/
function checkPassword(input_password){
	let result;
	if ((input_password.length>=8 && input_password.match(/[a-z]/g) && input_password.match(/[A-Z]/g) && input_password.match(/[0-9]/g && input_password.match(/[\!\^\$\(\)\[\]\{\}\?\+\*\.\/\\\|&é#èçà@%ùâêî]/g))) || input_password.length>=14) {
		result = "strong";
	}else if ((input_password.length>=6 && input_password.match(/[a-z]/g) && input_password.match(/[A-Z]/g) && input_password.match(/[0-9]/g)) || input_password.length>=10) {
		result = "medium";
	}else{
		result = "weak";
	}
	return result;
}

/** showPassword
* to show or mask password
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

/** verifyLogin
* check if mail is valid or not && password's complexity
*/
function verifyLogin() {
	if (isValidMail(mail.value)){
		alert('Mail valid')
	}else{
		alert('Mail invalid')
	}
	switch(checkPassword(password.value))
	{
	    case "strong" :
	        alert("Password : " + checkPassword(password.value));
	    break;
	    case "medium" :
	        alert("Password : " + checkPassword(password.value));
	    break;
	    case "weak" :
	        alert("Password : " + checkPassword(password.value));
	    break;

	    default :
	        alert("Not Found");
	}
}

/** verifyRegister
* check if phone number, cin, mail are valid or not && password's complexity
*/
function verifyRegister() {
	if (isValidPhoneNumber(phone.value)){
		alert('Phone number valid')
	}else{
		alert('Phone number invalid')
	}
	if (isValidCIN(cin.value)){
		alert('CIN valid')
	}else{
		alert('CIN invalid')
	}
	if (isValidMail(mail.value)){
		alert('Mail valid')
	}else{
		alert('Mail invalid')
	}
	switch(checkPassword(password.value))
	{
	    case "strong" :
	        alert("Password : " + checkPassword(password.value));
	    break;
	    case "medium" :
	        alert("Password : " + checkPassword(password.value));
	    break;
	    case "weak" :
	        alert("Password : " + checkPassword(password.value));
	    break;

	    default :
	        alert("Not Found");
	}
}

/** switchToLogin
* change to login page
*/
function switchToLogin() {
	var div = document.getElementById('result_page');
	div.innerHTML = `
		<div class="content-div" id="login">
				<h2 class="text-center" id="title">Login</h2><br>
				<form>
					<div class="form-group row">
						<label class="col-form-label text-left col-md-3" for="mail">Email</label>
						<div class="input-group col-md-9">
							<div class="input-group-prepend">
								<div class="input-group-text"><i class="fa fa-envelope"></i></div>
							</div>
							<input type="email" class="form-control col-md-10" id="mail" placeholder="xxxxxxxxxx@xxxx.xx">	
						</div>
					</div>
					<div class="form-group row">
						<label class="col-form-label text-left col-md-3" for="password">Password</label>
						<div class="input-group col-md-9">
							<div class="input-group-prepend">
								<div class="input-group-text"><b><i class="fa fa-lock"></i>&nbsp;</b></div>
							</div>
							<input type="password" class="form-control col-md-9" id="password" placeholder="xxxxxxxxxx" minlength="2">
							<div class="input-group-prepend">
								<div class="input-group-text" id="show-div" onclick="showPassword()"><i class="fa fa-eye" id="eye"></i></div>
							</div>	
						</div>
					</div>
					<br>
					<div class="form-group">
						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="chk">
							<label class="custom-control-label" for="chk">Remember me</label>
						</div>
					</div>
					<center><button class="btn btn-primary mr-2 mb-2" onclick="verifyLogin()">Sign in</button></center>
				</form><br>
				<p><a href="#" class="text-primary" onclick="switchToRegister()">Don't have an account? sign up</a></p>
			</div>
	`;
}

/** switchToRegister
* change to register page*/
function switchToRegister(argument) {
	var div = document.getElementById('result_page');
	div.innerHTML = `
	<div class="content-div" id="register">
				<h2 class="text-center" id="title">Sin up</h2>
				<form>
					<div class="form-group row">
						<div class="col-sm-6">
							<label class="col-form-label text-left" for="firstname">Firstname</label>
							<div class="input-group mb-2">
								<div class="input-group-prepend">
									<div class="input-group-text"><i class="fa fa-user"></i></div>
								</div>
								<input type="text" class="form-control col-md-10" id="firstname" placeholder="John" minlength="2">	
							</div>
						</div>
						<div class="col-sm-6">
							<label class="col-form-label text-left" for="lastname">Lastname</label>
							<div class="input-group mb-2">
								<div class="input-group-prepend">
									<div class="input-group-text"><i class="fa fa-user"></i></div>
								</div>
								<input type="text" class="form-control col-md-10" id="lastname" placeholder="Wick" minlength="2">	
							</div>
						</div>
					</div>
					<div class="form-group row">
						<div class="col-sm-6">
							<label class="col-form-label text-left" for="phone">Phone number</label>
							<div class="input-group mb-2">
								<div class="input-group-prepend">
									<div class="input-group-text"><i class="fa fa-phone"></i></div>
								</div>
								<input type="text" class="form-control col-md-10" id="phone" placeholder="000 00 000 00" minlength="2">	
							</div>
						</div>
						<div class="col-sm-6">
							<label class="col-form-label text-left" for="cin">CIN</label>
							<div class="input-group mb-2">
								<div class="input-group-prepend">
									<div class="input-group-text"><i class="fa fa-credit-card"></i></div>
								</div>
								<input type="text" class="form-control col-md-10" id="cin" placeholder="000 000 000 000" minlength="2">	
							</div>
						</div>
					</div>
					<div class="form-group row">
						<div class="col-sm-6">
							<label class="col-form-label text-left" for="mail">Email adress</label>
							<div class="input-group mb-2">
								<div class="input-group-prepend">
									<div class="input-group-text"><i class="fa fa-envelope"></i></div>
								</div>
								<input type="email" class="form-control col-md-10" id="mail" placeholder="xxxxxxxxxx@xxxx.xx">	
							</div>
						</div>
						<div class="col-sm-6">
							<label class="col-form-label text-left" for="password">Password</label>
							<div class="input-group mb-2">
								<div class="input-group-prepend">
									<div class="input-group-text"><i class="fa fa-lock"></i></div>
								</div>
								<input type="password" class="form-control col-md-9" id="password" placeholder="xxxxxxxxxx" minlength="2">
								<div class="input-group-prepend">
									<div class="input-group-text" id="show-div" onclick="showPassword()"><i class="fa fa-eye" id="eye"></i></div>
								</div>	
							</div>
						</div>
					</div>

					<center><button class="btn btn-primary mr-2 mb-2"  onclick="verifyRegister()">Register</button></center>
				</form>
				<p><a href="#" class="text-primary" onclick="switchToLogin()">Switch to login page</a></p>
			</div>
	`;
}

// index page: login
switchToLogin();
