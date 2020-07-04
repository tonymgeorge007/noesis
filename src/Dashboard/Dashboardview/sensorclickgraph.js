import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';


const data = {
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
      data: [65, 59, 90, 81, 56, 55, 50]
    }
  ]
};

class MyChart extends Component{

  render() {
    return (
      <div>
        {/* <h2>Line Example</h2> */}
        <Line data={data} />
      </div>
    );
  }
};
export default MyChart;