login_page = `
    <div class="content-div" id="login">
        <h2 class="text-center" id="title">Login</h2><br>
        <form>
            <div class="form-group row">
                <label class="col-form-label text-left col-md-3" for="mail">Email</label>
                <div class="input-group col-md-9">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fa fa-envelope"></i></div>
                    </div>
                    <input type="text" class="form-control col-md-10" id="mail" placeholder="xxxxxxxxxx@xxxx.xx">
                </div>
                <div class="col-md-12 text-center" id="alert-mail"></div>
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
                <div class="col-md-12 text-center" id="alert-password"></div>
            </div>
            <br>
            <div class="form-group">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="chk">
                    <label class="custom-control-label" for="chk">Remember me</label>
                </div>
            </div>
            <center><button class="btn btn-primary mr-2 mb-2">Sign in</button></center>
        </form><br>
        <p><a href="#" class="text-primary" id="switch_to_register">Don't have an account? sign up</a></p>
    </div>
`;

register_page = `
    <div class="content-div" id="register">
        <h2 class="text-center" id="title">Sign up</h2>
        <form>
            <div class="form-group row">
                <div class="col-sm-6">
                    <label class="col-form-label text-left" for="firstname">Firstname (*)</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-user"></i></div>
                        </div>
                        <input type="text" class="form-control col-md-10" id="firstname" placeholder="John" minlength="2">  
                    </div>
                <div class="col-md-12 text-center" id="alert-firstname"></div>
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
                    <label class="col-form-label text-left" for="phone">Phone number (*)</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-phone"></i></div>
                        </div>
                        <input class="form-control col-md-10" type="text" id="phone" placeholder="000 00 000 00" minlength="2" maxlength="13">
                    </div>
                <div class="col-md-12 text-center" id="alert-phone"></div>
                </div>
                <div class="col-sm-6">
                    <label class="col-form-label text-left" for="cin">CIN (*)</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-credit-card"></i></div>
                        </div>
                        <input type="text" class="form-control col-md-10" id="cin" placeholder="000 000 000 000" minlength="2" maxlength="15"> 
                    </div>
                <div class="col-md-12 text-center" id="alert-cin"></div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-6">
                    <label class="col-form-label text-left" for="mail">Email adress (*)</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-envelope"></i></div>
                        </div>
                        <input type="text" class="form-control col-md-10" id="mail" placeholder="xxxxxxxxxx@xxxx.xx">  
                    </div>
                <div class="col-md-12 text-center" id="alert-mail"></div>
                </div>
                <div class="col-sm-6">
                    <label class="col-form-label text-left" for="password">Password (*)</label>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="fa fa-lock"></i></div>
                        </div>
                        <input type="password" class="form-control col-md-9" id="password" placeholder="xxxxxxxxxx" minlength="2">
                        <div class="input-group-prepend">
                            <div class="input-group-text" id="show-div" onclick="showPassword()"><i class="fa fa-eye" id="eye"></i></div>
                        </div>  
                    </div>
                <div class="col-md-12 text-center" id="alert-password"></div>
                </div>
            </div>

            <center><button class="btn btn-primary mr-2 mb-2">Register</button></center>
        </form>
        <p><a href="" class="text-primary" id="switch_to_login">Switch to login page</a></p>
    </div>
`;