import React, { Component } from 'react';
import './dashboard.css';
import Menu from './Menu/menu';
import Dashboardview from './Dashboardview/dashboardview';

class Dashboard extends Component {
  render() {
    return (
    <div>
      <p  className="in-mobile-h3">Use Desktop Version</p>
        <div className="row margin_right_0 in-mobile">
          
            <div className="col-md-2 padding_right_0">
              <Menu />
            </div>
            <div className="col-md-10 padding_left_0">
              <Dashboardview />
            </div>

        </div>
    </div>
    );
  }
}

export default Dashboard;