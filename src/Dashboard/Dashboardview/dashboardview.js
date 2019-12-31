import React, { Component } from 'react';
import './dashboardview.css';
import { Table } from 'react-bootstrap';
import Mydatepicker from './datepicker';
import axios from 'axios';
import { Modal } from 'react-bootstrap';


class Dashboardview extends Component {
  state = {
    show: false,
    ChipID:'',
    rms_lf:'',
    dir_lf:'',
    logitude:'',
    latitude:'',
    RMS_peak:'',
    sharpness:'',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoibm9lc2lzX3dlYiJ9.2oQCiI1OR8q_nSGEudKSt5X3KgJ0QRi_MVsVk0-7uyw'
  }


  constructor(props) {
    super(props);
    this.sumbitSensor = this.sumbitSensor.bind(this);
  } 

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  sumbitSensor() {

    const sensor = {
      p_chipid: "10312639",
      p_datetime: "2019-12-29T19:56:00"
    };
console.log("sensor",sensor);

    const sensorinstance = axios.create({
      baseURL: 'http://34.90.114.171:3000',
      headers: {
        Authorization: "Bearer " + this.state.token,
        "Content-Type": "application/json"
      }
    });

    sensorinstance.post(`/rpc/lastsensordata`, sensor )
  .then(res => {
    let sensor_response = res.data;
    console.log("sensor_response",sensor_response);
    this.setState({ ChipID: sensor_response[0].p_result.ChipID });
    this.setState({ rms_lf: sensor_response[0].p_result.RMS_LF });
    this.setState({ dir_lf: sensor_response[0].p_result.DIR_LF });
    this.setState({ logitude: sensor_response[0].p_result.LongitudeGPS });
    this.setState({ latitude: sensor_response[0].p_result.LatitudeGPS });
    this.setState({ RMS_peak: sensor_response[0].p_result.RMS_Peak });
    this.setState({ sharpness: sensor_response[0].p_result.Sharpness });
    this.showModal();
    // alert(sensor_response[0].p_result.ChipID);
    


  })
}
 


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
    <tr onClick={this.sumbitSensor}>
      <td>1</td>
      <td>Mark</td>
      <td>Operational</td>
      <td>78</td>
    </tr>
    <tr onClick={this.sumbitSensor}>
      <td>2</td>
      <td>Jacob</td>
      <td>Operational</td>
      <td>13</td>
    </tr>

  </tbody>
</Table>

<Modal show={this.state.show} handleClose={this.hideModal}>
  <h4 className="modal_header">Sensor Details</h4>
    <p className="modal_item">Chip ID : {this.state.ChipID}</p>
    <p className="modal_item">RMS LF : {this.state.rms_lf}</p>
    <p className="modal_item">DIR LF :  {this.state.dir_lf}</p>
    <p className="modal_item">RMS Peak : {this.state.RMS_peak}</p>
    <p className="modal_item">Sharpness : {this.state.sharpness}</p>
    <p className="modal_item">Longitude : {this.state.longitude}</p>
    <p className="modal_item">Latitude : {this.state.latitude}</p>
         

<button type="button"  className="modal_close" onClick={this.hideModal}>CLOSE</button>
       
</Modal>


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