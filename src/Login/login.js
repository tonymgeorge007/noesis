import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import axios from 'axios';

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoibm9lc2lzX3dlYiJ9.2oQCiI1OR8q_nSGEudKSt5X3KgJ0QRi_MVsVk0-7uyw';

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    


    const user = {
      p_username: email,
      p_seckey: password
    };
console.log("user",user);

    const instance = axios.create({
      baseURL: 'http://158.101.193.151:3000',
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    });

  instance.post(`/rpc/userauth`, user  )
  .then(res => {
    let login_response = res.data;
    localStorage.setItem("username", login_response[0].p_result.displayname);
    if (login_response[0].p_result.displayname != null)
    {
      props.history.push('/dashboard');
      
    }
    else{
      alert("Invalid usename or password.")
    }
  })




  }

  return (
    <div className="loginscreen">
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
         <span><p> Username</p>
          <FormControl
          placeholder="Username"
            autoFocus
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          /></span>
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
         Password
          <FormControl
          placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            className="secondfield"
          />
        </FormGroup>
        {/* <Button block bsSize="large" disabled={!validateForm()} type="submit"> */}
        <Button className="loginbutton" block bsSize="large"  type="submit">

          Login
        </Button>
      </form>
    </div>
    </div>
  );
}