import React, { Component } from 'react'
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  Map,
  Popup,
  TileLayer,
} from 'react-leaflet'
import axios from 'axios';


export default class OtherLayersExample extends Component<{}> {
  state = {
    lat: '',
    lng: '',
    zoom: 18,
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoibm9lc2lzX3dlYiJ9.2oQCiI1OR8q_nSGEudKSt5X3KgJ0QRi_MVsVk0-7uyw',
    plotliststate:[],
  }
    constructor(props) {
    super(props);
    this.clickedSensor = this.clickedSensor.bind(this);
  } 


  componentWillMount ()
  {
    this.plotmap();
  }

 clickedSensor(chipidentifier){
    alert ("You Have clicked the Device : " + chipidentifier + ". Graphical view is under development");
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


  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayerGroup>
        </LayerGroup>

        {this.state.plotliststate.map((plotliststate, index) => (
          <FeatureGroup onClick={event => this.clickedSensor(plotliststate.DeviceID)}  color= {plotliststate.Status == "Online" ? "green" : "red"}>
        {/* <Popup>Device ID : {plotliststate.DeviceID}</Popup> */}
          <Circle center={[plotliststate.Position.Latitude, plotliststate.Position.Longitude]} radius={4} />
          </FeatureGroup>
    ))}


      </Map>
    )
  }
}