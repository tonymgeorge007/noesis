import React, { Component } from 'react';
import './sensors.css';
import { Table } from 'react-bootstrap';
import Mydatepicker from './datepicker';
import axios from 'axios';
import { Modal, Dropdown } from 'react-bootstrap';
import moment from 'moment';
import user from '../../Images/user.png';
import SensorLeaf from './sensorleafmap';


class Sensors extends Component {
    constructor(props) {
    super(props);
  }
    state = {
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoibm9lc2lzX3dlYiJ9.2oQCiI1OR8q_nSGEudKSt5X3KgJ0QRi_MVsVk0-7uyw',

  }

  logout(){
    {localStorage.removeItem("username");}
    window.location.href = '/';
  }

  render() {
    return (
<div>
            <div className="dashboard-header ">

              <h3>Sensors</h3>
            
              <Dropdown>
  <Dropdown.Toggle className="username" variant="success" id="dropdown-basic">
  <span><img src={user} alt="User" className="userpic" />{localStorage.getItem("username")}</span>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={this.logout}>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </div>


<div className="row">
            <div className="col-md-12 sensormappadding">
            <SensorLeaf />
            </div>
</div>


<div className="row">
            <div className="dashboard-header sensors">
              <h3>Tabular data</h3>
              </div>
</div>

<div className="row ">
<div className="col-md-12 sensormappadding"> 
            <Table striped bordered hover className="sensor_table_height" >
  <thead>
    <tr>
      <th>#</th>
      <th>ADDRESS</th>
      <th>AREA</th>
      <th>STATUS</th>
      <th>NOISE (24 HR)</th>
      <th>NOISE GRAPH(24 HR)</th>
      <th>ACTIONS</th>
      <th>HISTORY</th>
    </tr>
  </thead>
  <tbody>

    <tr  >
    <td>22</td>
    <td>High Street 37</td>
    <td>Downtown</td>
    <td>Operational</td>
    <td>75</td>
    <td></td>
    <td>Create Ticket</td>
    <td>Ticket History</td>
    </tr>
    




  </tbody>
</Table>




</div>



</div>
            <div className="row footer">
            
            <div className="col-md-4">
            <a href="http://158.101.193.151/Documents/Noesis cookie and privacy statement V2020.1.pdf">
            <p>Privacy Statement</p>
            </a>
            </div>
            
            <div className="col-md-4">
            <a href="http://158.101.193.151/Documents/Noesis terms and conditions.pdf">
            <p>Terms & Conditions</p>
            </a>
            </div>

            <div className="col-md-4">
            <a href="https://noesis.network/">
            <p>About Us</p>
            </a>
            </div>
            
            </div>

    </div>

    );
  }
}

export default Sensors;