import React, { Component } from 'react';
import './dashboardview.css';
import { Table } from 'react-bootstrap';
import Mydatepicker from './datepicker';
import axios from 'axios';
import { Modal, Dropdown } from 'react-bootstrap';
import moment from 'moment';
import user from '../../Images/user.png';
import Heatmap from './heatmap';
import Sensors from './sensors';
import SensorClick from './sensorclick';
import Footer from './footer';
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  Map,
  Popup,
  TileLayer,
} from 'react-leaflet'


class Dashboardview extends Component {
  state = {
    show: false,
    sensor_click: false,
    ChipID:'',
    rms_lf:'',
    dir_lf:'',
    logitude:'',
    latitude:'',
    RMS_peak:'',
    sharpness:'',
    device_id:'',
    ChipIDnew:'',
    chipidentifier:'',
    status:'',
    recieveddate:'',
    sensorliststate:[],
    lat: '',
    lng: '',
    zoom: 18,
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoibm9lc2lzX3dlYiJ9.2oQCiI1OR8q_nSGEudKSt5X3KgJ0QRi_MVsVk0-7uyw',
    plotliststate:[]
  }


  constructor(props) {
    super(props);
    this.sumbitSensor = this.sumbitSensor.bind(this);
    this.clickedSensor = this.clickedSensor.bind(this);
  } 


  logout(){
    {localStorage.removeItem("username");}
    window.location.href = '/';
  }
  showheatmap(){
    this.setState({ heatmap: true})
  }

  componentWillMount ()
  {
    if(localStorage.getItem("username") === null)
    {
      alert("Login use a valid credential for view Dashboard");
      window.location.href = '/';
    }
this.plotmap();
this.listSensor();

  }
  clickedSensor(chipidentifier){

    this.setState({ chipidentifier: chipidentifier });
    this.setState({ sensor_click: true });

    }
plotmap() {
    const plotlist = {
      p_projectid:123
    };

    const plotlistinstance = axios.create({
      baseURL: 'http://158.101.193.151:3000',
      headers: {
        Authorization: "Bearer " + this.state.token,
        "Content-Type": "application/json"
      }
    });

    plotlistinstance.post(`/rpc/noiselevels`, plotlist )
  .then(res => {
    let plotlist_response = res.data;
    this.setState({ plotliststate: plotlist_response[0].p_result});
    this.setState({ lat: plotlist_response[0].p_result[0].Position.Latitude});
    this.setState({ lng: plotlist_response[0].p_result[0].Position.Longitude});
  })
}
  listSensor() {

    const sensorlist = {
      p_projectid:123
    };

    const sensorlistinstance = axios.create({
      baseURL: 'http://158.101.193.151:3000',
      headers: {
        Authorization: "Bearer " + this.state.token,
        "Content-Type": "application/json"
      }
    });

    sensorlistinstance.post(`/rpc/dashboard`, sensorlist )
  .then(res => {
    let sensorlist_response = res.data;
    this.setState({ sensorliststate: sensorlist_response[0].p_result});

    
  })
}

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  sumbitSensor(chipidentifier) {

    const sensor = {
      p_chipid: chipidentifier.toString(),
      p_datetime: null
    };

    const sensorinstance = axios.create({
      baseURL: 'http://158.101.193.151:3000',
      headers: {
        Authorization: "Bearer " + this.state.token,
        "Content-Type": "application/json"
      }
    });

    sensorinstance.post(`/rpc/lastsensordata`, sensor )
  .then(res => {
    let sensor_response = res.data;
    this.setState({ ChipID: sensor_response[0].p_result.ChipID });
    this.setState({ rms_lf: sensor_response[0].p_result.RMS_LF });
    this.setState({ dir_lf: sensor_response[0].p_result.DIR_LF });
    this.setState({ logitude: sensor_response[0].p_result.LongitudeGPS });
    this.setState({ latitude: sensor_response[0].p_result.LatitudeGPS });
    this.setState({ RMS_peak: sensor_response[0].p_result.RMS_Peak });
    this.setState({ sharpness: sensor_response[0].p_result.Sharpness });
    this.setState({ recieveddate: sensor_response[0].p_result.ReceivedTime });
    this.showModal();
    
  })
}
 
  render() {
    const sensor_click = this.state.sensor_click;
    const chipidentifier = this.state.chipidentifier;
    const sensor_data = this.state.plotliststate;
    const position = [this.state.lat, this.state.lng];
    const graph_data = [65, 59, 90, 81, 56, 55, 50];
    {

    return <div>
            <div className="dashboard">
            <div className="dashboard-header">

              <h3>Noise Levels</h3>
            
              <Dropdown>
  <Dropdown.Toggle className="username" variant="success" id="dropdown-basic">
  <span><img src={user} alt="User" className="userpic" />{localStorage.getItem("username")}</span>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={this.logout}>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </div>
            <div className="dashboard-map padding_left_20">

        <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayerGroup>
        </LayerGroup>

        {this.state.plotliststate.map((plotliststate, index) => (
          <FeatureGroup onClick={event => this.clickedSensor(plotliststate.DeviceID)}  color= {plotliststate.Status == "Online" ? "green" : "red"}>
          <Circle center={[plotliststate.Position.Latitude, plotliststate.Position.Longitude]} radius={4} />
          </FeatureGroup>
            ))}
        </Map>

            </div>
            <div className="dashboard-middile row">

          {sensor_click == true ? <SensorClick sensor_data={sensor_data} chipidentifier={chipidentifier} graph_data={graph_data} /> : 
            <div className="col-md-5">

            <div className="row">
            <h3>Tabular data</h3>
</div>



<div className="row table_width_height">
            <Table striped bordered hover className=" table_view_position scrollbar table-zindex" >
  <thead>
    <tr>
      <th>PROJECT</th>
      <th>DEVICE ID</th>
      <th>CHIP ID</th>
      <th>STATUS</th>
    </tr>
  </thead>
  <tbody>

  {this.state.sensorliststate.map((sensorliststate, index) => (
    <tr className="fonttable" onClick={event => this.sumbitSensor(sensorliststate.ChipID)}>
    <td className="fonttable" >{sensorliststate.Project}</td>
    <td className="fonttable" >{sensorliststate.DeviceID}</td>
    <td className="fonttable" >{sensorliststate.ChipID}</td>
    <td className="fonttable" >{sensorliststate.Status}</td>
    </tr>

    ))}

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

    <p className="modal_item">Received Time : {moment(this.state.recieveddate).format("YYYY-MM-DD HH:mm:ss")}</p>
         
<button type="button"  className="modal_close" onClick={this.hideModal}>CLOSE</button>
       
</Modal>


  </div>

  </div>
}
            <div className="col-md-7 middile_second datepicker_dashboard">
<div className="row">
            <h3>Time and date range</h3>
</div>
            <Mydatepicker />
            </div>
            </div>
            </div>
            <Footer />
    </div>
  }
  }
}

export default Dashboardview;