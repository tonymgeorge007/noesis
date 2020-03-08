import React, { Component } from 'react';
import './sensorclick.css';
import axios from 'axios';
import moment from 'moment';
import MyChart  from './sensorclickgraph';

class SensorClick extends Component {
    constructor(props) {
    super(props);
  }
  
    state = {

  }



  render() {
    return (
   

            <div className="col-md-5 sensor_click_div">
                <div className="dashboard-header">

                            <h3>Sensors details</h3>
                </div>
                <div className="row">

                    <div className="col-md-4 sensor_details">
                    <h6>SENSOR ID</h6>
                    <p>22</p>
                    <h6>ADDRESS</h6>
                    <p>High street</p>
                    <h6>AREA</h6>
                    <p>Downtown</p>
                    <h6>NOISE LEVEL DB</h6>
                    <p>70 dB(A)</p>
                    </div>


                        <div className="col-md-8">
                <MyChart />
                    </div>


        </div>

            </div>
           
 
    );
  }
}

export default SensorClick;