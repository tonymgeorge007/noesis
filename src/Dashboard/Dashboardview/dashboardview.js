import React, { Component } from 'react';
import './dashboardview.css';
import { Table } from 'react-bootstrap';
import Mydatepicker from './datepicker'


class Dashboardview extends Component {
  render() {
    return (
    <div>
            <div className="dashboard">
            <div className="dashboard-header">

              <h3>Noise Levels</h3>
              
            </div>
            <div className="dashboard-map"></div>
            <div className="dashboard-middile row">

              <div className="col-md-5">
            <div className="row">
            <h3>Tabular data</h3>
</div>
<div className="row">
            <Table striped bordered hover className="table_width table_view_position" >
  <thead>
    <tr>
      <th>#</th>
      <th>ADDRESS</th>
      <th>STATUS</th>
      <th>LEVEL (DB)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Operational</td>
      <td>78</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Operational</td>
      <td>13</td>
    </tr>

  </tbody>
</Table>
</div>

            </div>

           

            <div className="col-md-7 padding-top-25">

            <Mydatepicker />
            </div>
            </div>




            
            </div>
    </div>
    );
  }
}

export default Dashboardview;