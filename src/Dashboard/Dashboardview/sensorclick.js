import React, { Component } from 'react';
import './sensorclick.css';
import axios from 'axios';
import moment from 'moment';
import {Line} from 'react-chartjs-2';



class SensorClick extends Component {
    constructor(props) {
      super(props);
       this.data = {
  labels: ['0:00', '06:00', '12:00', '18:00', '24:00'],
  datasets: [
    {
      label: 'Noise Level',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      graphPoints :[],
    }
  ]
};
        this.state = {

        data:[]

    }
  }

  componentWillReceiveProps () {
    for (let index = 0; index < this.props.sensor_data.length; index++) {
  if (this.props.sensor_data[index].DeviceID == this.props.chipidentifier)
  {
    var needed_data = this.props.sensor_data[index]
    var needed_data_graph = this.props.sensor_data[index].HourlyAvgLevel
        var i=0, arr=[];
        for (var ob in needed_data_graph)
        arr[i++]=Math.floor(needed_data_graph[ob].HourlyAvg);

          }

        }

        this.setState({ data: arr});
  };


  componentWillMount ()
  {
for (let index = 0; index < this.props.sensor_data.length; index++) {
  if (this.props.sensor_data[index].DeviceID == this.props.chipidentifier)
  {
    var needed_data = this.props.sensor_data[index]
    var needed_data_graph = this.props.sensor_data[index].HourlyAvgLevel
        var i=0, arr=[];
        for (var ob in needed_data_graph)
        arr[i++]=Math.floor(needed_data_graph[ob].HourlyAvg);

          }

        }

        this.setState({ data: arr});

  }

  render() {

    this.data.datasets[0].data = this.state.data;
    


for (let index_in = 0; index_in < this.props.sensor_data.length; index_in++) {
  if (this.props.sensor_data[index_in].DeviceID == this.props.chipidentifier)
  {
    var needed_data_in = this.props.sensor_data[index_in]
          }
        }
  

    return (
            <div className="col-md-5 sensor_click_div">
                <div className="dashboard-header">

                    <h3>Sensors details</h3>
                </div>
                <div className="row">

                    <div className="col-md-4 sensor_details">
                    <h6>DeviceID</h6>
                    <p>{needed_data_in.DeviceID}</p>
                    <h6>ADDRESS</h6>
                    <p>{needed_data_in.Address.Location}</p>
                    <h6>AREA</h6>
                    <p>{needed_data_in.Area}</p>
                    <h6>NOISE LEVEL</h6>
                    <p>{needed_data_in.AvgLevel} dB(A)</p>
                    </div>
                        <div className="col-md-8">
                      <div>
                      {console.log ("this.data", this.data)}
                      {console.log ("this.data.datasets.data", this.data.datasets.data)}
                          <Line data={this.data} />
                      </div>
                    </div>
        </div>

            </div>
    
    );
  }
}

export default SensorClick;