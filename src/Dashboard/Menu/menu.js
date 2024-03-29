import React, { Component } from 'react';
import './menu.css';
import home from '../../Images/icon_home.svg';
import noise from '../../Images/Group 4.svg';
import sensors from '../../Images/Icon metro-wrench.svg';
import help from '../../Images/icon_help-center.svg';
import setting from '../../Images/icon_setting.svg';
import logo from '../../Images/NOESIS_LOGO.png';
import showheatmap from '../Dashboardview/dashboardview';

import { Link } from 'react-router-dom'


class Menu extends Component {
  render() {
    return (
    <div className="menu">
            <div className="menu-heading">
                <h3>DASHBOARD</h3>
            </div>
            <div className="menu-items">
                <ul className="menu-list-style">
                        {/* <li className="row margin_right_0">
                            <span className="menu-span"><img src={home} className="menu-icon"/> <p  className="menu-list">HOME</p></span>
                        </li> */}
                    <Link to="/dashboard" from="/dashboard">
                         <li  className="row margin_right_0">
                    		<span className="menu-span"><img src={noise} className="menu-icon"/> <p  className="menu-list">NOISE LEVELS</p></span>
                    	</li>
                    </Link>
                    <Link to="/dashboard/sensors">
						<li  className="row margin_right_0">
                    		<span className="menu-span"><img src={sensors} className="menu-icon"/> <p  className="menu-list">SENSORS</p></span>
                    	</li>
					</Link>
                    <Link to="/dashboard/heatmap">
                    <li  className="row margin_right_0">
                    <span className="menu-span"><img src={home} className="menu-icon"/> <p  className="menu-list">HEATMAPS</p></span>
                    </li>
					</Link>
                    {/* <li  className="row margin_right_0">
                    <span className="menu-span"><img src={help} className="menu-icon"/> <p  className="menu-list">HELP</p></span>
                    </li> */}
                    {/* <li  className="row">
                    <span className="menu-span"><img src={setting} className="menu-icon"/> <p  className="menu-list">SETTINGS</p></span>
                    </li> */}
                    
                </ul>
            </div>
            <div className="logo-icon-top"></div>
            <img src={logo} className="logo-icon"/>
            {/* <h3 className="menu-bottom">NOESIS</h3> */}
    </div>
    );
  }
}

export default Menu;