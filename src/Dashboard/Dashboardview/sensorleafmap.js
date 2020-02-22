
import React, { Component } from 'react'
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  Map,
  Popup,
  TileLayer,
} from 'react-leaflet'


export default class SensorLeaf extends Component<{}> {
  state = {
    lat: 51.996456,
    lng: 5.974894,
    zoom: 18,
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
        <FeatureGroup color="red">
          <Popup>Noise Level : 45</Popup>
          <Circle center={[51.996256, 5.974894]} radius={4} />
        </FeatureGroup>
        <FeatureGroup color="red">
          <Popup>Noise Level : 53</Popup>
          <Circle center={[51.996456, 5.974694]} radius={4} />
        </FeatureGroup>
        <FeatureGroup color="red">
          <Popup>Noise Level : 34</Popup>
          <Circle center={[51.996756, 5.974464]} radius={4} />
        </FeatureGroup>
        <FeatureGroup color="red">
          <Popup>Noise Level : 72</Popup>
          <Circle center={[51.996156, 5.974134]} radius={4} />
        </FeatureGroup>
        <FeatureGroup color="red">
          <Popup>Noise Level : 09</Popup>
          <Circle center={[51.996056, 5.974034]} radius={4} />
        </FeatureGroup>
        <FeatureGroup color="red">
          <Popup>Noise Level : 23</Popup>
          <Circle center={[51.996656, 5.974134]} radius={4} />
        </FeatureGroup>
      </Map>
    )
  }
}