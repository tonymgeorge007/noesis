import React, { Component } from 'react';
import './dashboard.css';
import Menu from './Menu/menu';
import Heatmap from './Dashboardview/heatmap';
import Sensors from './Dashboardview/sensors';
import Dashboardview from './Dashboardview/dashboardview';

import { Route, Switch } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { path = "/" } = this.props.match;

    return (
    <div>
      <p  className="in-mobile-h3">Use Desktop Version</p>
        <div className="row margin_right_0 in-mobile">
          
            <div className="col-md-2 padding_right_0">
              <Menu />
            </div>
            <div className="col-md-10 padding_left_0 ">
			  <Switch>
                <Route path={`${path}/`} exact>
					<Dashboardview />
				</Route>

                <Route path={`${path}/sensors`} exact>
					<Sensors />
				</Route>

                <Route path={`${path}/heatmap`} exact>
                  <Heatmap />
                </Route>
              </Switch>

            </div>

        </div>
    </div>
    );
  }
}

export default Dashboard;