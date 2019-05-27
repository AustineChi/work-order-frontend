import React, { Component } from 'react';
import Footer from "../../layout/footer";

class Login extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <div className="center-header-elements card-1">
            <input className="inputStyle" type="email" name="" placeholder="Email:" id=""/>
            <input className="inputStyle" type="text" placeholder="Password:" />
            <input className="btn btn-login" type="button" value="Sign in"/>
            <label className="control-label" for="login-form-password">
            Password (<a href="/user/forgot" tabindex="5">Forgot password?</a>)
            </label>
            </div>
            <Footer />
        </div> 
        );
    }
}
 
export default Login;