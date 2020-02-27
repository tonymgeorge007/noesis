

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
    plotliststate:[],


addressPoints :[[53.096343, 5.840154, "2044.525"],
[53.096625, 5.840237, "44.441"],
[53.096407, 5.840073, "106.913"],
[53.096224, 5.83953, "64.124"],
[53.096037, 5.840025, "124.027"],
[53.095892, 5.840202, "155.974"],
[53.095608, 5.839843, "13.552"],
[53.095792, 5.839435, "153.695"],
[53.09597, 5.840008, "0"],
[53.096099, 5.839928, "0"],
[53.095751, 5.839831, "0"],
[53.096343, 5.840154, "2044.525"],
[53.096625, 5.840237, "44.441"],
[53.096407, 5.840073, "106.913"],
[53.096224, 5.83953, "64.124"],
[53.096037, 5.840025, "124.027"],
[53.095892, 5.840202, "155.974"],
[53.095608, 5.839843, "13.552"],
[53.095792, 5.839435, "153.695"],
[53.09597, 5.840008, "0"],
[53.096099, 5.839928, "0"],
[53.095751, 5.839831, "0"]]

  }

  componentWillMount ()
  {
    // this.plotmap();
  }


//   plotmap() {
//     const plotlist = {
//       p_projectid:123
//     };

//     const plotlistinstance = axios.create({
//       baseURL: 'http://158.101.193.151:3000',
//       headers: {
//         Authorization: "Bearer " + this.state.token,
//         "Content-Type": "application/json"
//       }
//     });

//     plotlistinstance.post(`/rpc/noiselevels`, plotlist )
//   .then(res => {
//     let plotlist_response = res.data;
//     console.log("plotlist_response",plotlist_response[0].p_result);
//     this.setState({ plotliststate: plotlist_response[0].p_result});
//     this.setState({ lat: plotlist_response[0].p_result[0].Position.Latitude});
//     this.setState({ lng: plotlist_response[0].p_result[0].Position.Longitude});


  


//   })
// }


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