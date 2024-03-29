import React, { Component } from 'react';
import './sensors.css';
import { Table } from 'react-bootstrap';
import Mydatepicker from './datepicker';
import axios from 'axios';
import { Modal, Dropdown } from 'react-bootstrap';
import moment from 'moment';
import user from '../../Images/user.png';
import SensorLeaf from './sensorleafmap';
import Footer from './footer';


class Sensors extends Component {
    constructor(props) {
    super(props);
  }
    state = {
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoibm9lc2lzX3dlYiJ9.2oQCiI1OR8q_nSGEudKSt5X3KgJ0QRi_MVsVk0-7uyw',
    sensortableliststate:[],

  }
  componentWillMount ()
  {
    this.sensortableview();
  }


  sensortableview() {
    const sensortablelist = {
      p_projectid:123
    };
    const sensortableinstance = axios.create({
      baseURL: 'http://158.101.193.151:3000',
      headers: {
        Authorization: "Bearer " + this.state.token,
        "Content-Type": "application/json"
      }
    });

    sensortableinstance.post(`/rpc/noiselevels`, sensortablelist )
  .then(res => {
    let sensortablelist_response = res.data;
    this.setState({ sensortableliststate: sensortablelist_response[0].p_result});
  })
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
            <Table striped bordered hover className="sensor_table_height sensor_main_table" >
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


{this.state.sensortableliststate.map((sensortableliststate, index) => (
    <tr  >
    <td>{sensortableliststate.DeviceID}</td>
    <td>{sensortableliststate.Address.Address}</td>
    <td>{sensortableliststate.Address.Location}</td>
    <td>{sensortableliststate.Status}</td>
    <td>{sensortableliststate.AvgLevel == null ? "N/A" : sensortableliststate.AvgLevel}</td>
    <td>
    {/* <MylistChart /> */}
    </td>
    <td>Create Ticket</td>
    <td>Ticket History</td>
    </tr>
))}

  </tbody>
</Table>
</div>

</div>
           <Footer />

    </div>

    );
  }
}

export default Sensors;