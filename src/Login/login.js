import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="loginscreen">

      <div className="loginform">
      <div className="row paddingtop20">

        <div className="col-md-4">
        <p>Username</p>
        </div>

        <div className="col-md-8">
        <input type="text"  className="floatleft" id="username" name="username" />
        </div>
      </div>

      <div className="row">
      <div className="col-md-4">
       <p>Password</p>
       </div>

       <div className="col-md-8">
        <input type="text"  className="floatleft" id="password" name="password" />
        </div>
       </div>

       <div className="row">
       <button type="button" class="btn btn-success loginbutton">Login</button>
       </div>

      </div>


      </div>
    );
  }
}

export default Login;