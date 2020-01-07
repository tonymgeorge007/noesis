import React, { Component } from 'react';
import './login.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Redirect} from 'react-router-dom';

class Login extends Component {

  state = {
    name:'',
    password:'',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoibm9lc2lzX3dlYiJ9.2oQCiI1OR8q_nSGEudKSt5X3KgJ0QRi_MVsVk0-7uyw'
  }

handleChangename(e){
    this.setState({name: e.target.value})
 }

 handleChangepass(e){
  this.setState({password: e.target.value})
}





sumbitLogin() {

    const user = {
      p_username: this.state.name,
      p_seckey: this.state.password
    };
console.log("user",user);

    const instance = axios.create({
      baseURL: 'http://34.90.114.171:3000',
      headers: {
        Authorization: "Bearer " + this.state.token,
        "Content-Type": "application/json"
      }
    });

  instance.post(`/rpc/userauth`, user  )
  .then(res => {
    let login_response = res.data;
    localStorage.setItem("username", login_response[0].p_result.displayname);
    if (login_response[0].p_result.displayname != null)
    {
      this.props.history.push('/dashboard');
    }
    else{
      alert(login_response[0].p_result.error_text)
    }
  })
}

  render() {
    return (
      <div className="loginscreen">
      <div className="loginform">
      <div className="row paddingtop20">
        <div className="col-md-4">
        <p>Username</p>
        </div>

        <div className="col-md-8">
        <input type="text"  className="floatleft" id="username" name="username"  value={this.state.name} onChange={(e) => this.handleChangename(e)} />
        </div>
      </div>

      <div className="row">
      <div className="col-md-4">
       <p>Password</p>
       </div>

       <div className="col-md-8">
        <input  type="password"  className="floatleft" id="password" name="password"  value={this.state.password} onChange={(e) => this.handleChangepass(e)} />
        </div>
       </div>

       <div className="row">
       <button type="button" class="btn btn-success loginbutton" onClick={(e) => this.sumbitLogin(e)}>Login</button>
       </div>

      </div>


      </div>
    );
  }
}

export default Login;