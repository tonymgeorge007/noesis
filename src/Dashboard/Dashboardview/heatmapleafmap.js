

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
import HeatmapLayer from 'react-leaflet-heatmap-layer';


export default class SensorLeaf extends Component<{}> {
  state = {
    lat: '',
    lng: '',
    zoom: 18,
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoibm9lc2lzX3dlYiJ9.2oQCiI1OR8q_nSGEudKSt5X3KgJ0QRi_MVsVk0-7uyw',
    heatmapplotlist_state:[],
    addressPoints :[],
      }



  componentWillMount ()
  {
    this.plotheatmap();
  }


  plotheatmap() {
    const heatmapplotlist = {
      p_projectid:123
    };

    const heatmapplotlistinstance = axios.create({
      baseURL: 'http://158.101.193.151:3000',
      headers: {
        Authorization: "Bearer " + this.state.token,
        "Content-Type": "application/json"
      }
    });

    heatmapplotlistinstance.post(`/rpc/heatmapdata`, heatmapplotlist )
  .then(res => {
    let heatmapplotlist_response = res.data;
    let heatmapplotlist_response_inner = heatmapplotlist_response[0].p_result;
    this.setState({ heatmapplotlist_state: heatmapplotlist_response[0].p_result});

            let results = heatmapplotlist_response_inner;
            let arr = [], item;
            for (let i = 0, len = results.length; i < len; i++) {
                item = results[i];
                arr.push([item.Latitude,item.Longitude,item.AvgLevel==null? "0":item.AvgLevel.toString()]);
            }
 this.setState({ addressPoints: arr});
  })
}


  render() {
    return (
      
      <div>
        <Map center={[53.096343,5.840154]} zoom={18}>
          <HeatmapLayer
            fitBoundsOnLoad
            fitBoundsOnUpdate
            points={this.state.addressPoints}
            longitudeExtractor={m => m[1]}
            latitudeExtractor={m => m[0]}
            intensityExtractor={m => parseFloat(m[2])} />
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Map>
      </div>
    )
  }
}