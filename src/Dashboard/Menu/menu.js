import React, { Component } from 'react';
import './menu.css'
import home from '../../Images/home.png';

class Menu extends Component {
  render() {
    return (
    <div className="menu">
            <div className="menu-heading">
                <h3>DASHBOARD</h3>
            </div>
            <div className="menu-items">
                <ul className="menu-list-style">
                    <li className="row">
                    <span className="menu-span"><img src={home} className="menu-icon"/> <p  className="menu-list">HOME</p></span>
                    </li>
                    <li  className="row">
                    <span className="menu-span"><img src={home} className="menu-icon"/> <p  className="menu-list">NOISE LEVELS</p></span>
                    </li>
                    <li  className="row">
                    <span className="menu-span"><img src={home} className="menu-icon"/> <p  className="menu-list">SENSORS</p></span>
                    </li>
                    <li  className="row">
                    <span className="menu-span"><img src={home} className="menu-icon"/> <p  className="menu-list">HEATMAPS</p></span>
                    </li>
                    <li  className="row">
                    <span className="menu-span"><img src={home} className="menu-icon"/> <p  className="menu-list">HELP</p></span>
                    </li>
                    <li  className="row">
                    <span className="menu-span"><img src={home} className="menu-icon"/> <p  className="menu-list">SETTINGS</p></span>
                    </li>
                    
                </ul>
            </div>
    </div>
    );
  }
}

export default Menu;