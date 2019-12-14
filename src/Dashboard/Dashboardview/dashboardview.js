import React, { Component } from 'react';
import './dashboardview.css';
import { Table } from 'react-bootstrap';


class Dashboardview extends Component {
  render() {
    return (
    <div>
            <div className="dashboard">
            <div className="dashboard-header">

              <h3>Noise Levels</h3>
              
            </div>
            <div className="dashboard-map"></div>
            <div className="dashboard-middile">
            <div className="row">
            <h3>Tabular data</h3>
</div>
<div className="row">
            <Table striped bordered hover className="table_width table_view_position" >
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</div>

            </div>


           

            
            </div>
    </div>
    );
  }
}

export default Dashboardview;