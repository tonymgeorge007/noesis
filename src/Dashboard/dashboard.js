import React, { Component } from 'react';
import './dashboard.css'

class Dashboard extends Component {
  render() {
    return (
    <div>
        <div className="row margin_right_0">
            <div className="col-md-2 menu">This is Menu.</div>
            <div className="col-md-10 dashboard">This is Dashboard.</div>
        </div>
    </div>
    );
  }
}

export default Dashboard;