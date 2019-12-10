import React, { Component } from 'react';
import './dashboard.css';
import Menu from './Menu/menu';
import Dashboardview from './Dashboardview/dashboardview';

class Dashboard extends Component {
  render() {
    return (
    <div>
        <div className="row margin_right_0">
            <div className="col-md-2">
              <Menu />
            </div>
            <div className="col-md-10">
              <Dashboardview />
            </div>

        </div>
    </div>
    );
  }
}

export default Dashboard;