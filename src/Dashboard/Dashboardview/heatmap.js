import React, { Component } from 'react';
import './heatmap.css';
import { Table } from 'react-bootstrap';
import Mydatepicker from './datepicker';
import axios from 'axios';
import { Modal, Dropdown } from 'react-bootstrap';
import moment from 'moment';
import user from '../../Images/user.png';
import SimpleExample from './mapviewleaf';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Dummyaccordian from './accordian';
import HeatmapLeaf from './heatmapleafmap';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


class Heatmap extends Component {
    constructor(props) {
    super(props);
  }
    state = {
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoibm9lc2lzX3dlYiJ9.2oQCiI1OR8q_nSGEudKSt5X3KgJ0QRi_MVsVk0-7uyw',
    value: { min: 2, max: 10 },
  }

  logout(){
    {localStorage.removeItem("username");}
    window.location.href = '/';
  }

  render() {
    return (
<div>
            <div className="dashboard-header">

              <h3>Heatmaps</h3>
            
              <Dropdown>
  <Dropdown.Toggle className="username" variant="success" id="dropdown-basic">
  <span><img src={user} alt="User" className="userpic" />{localStorage.getItem("username")}</span>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={this.logout}>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </div>

        <div className="row">
          
            <div className="col-md-3 padding_left_40" >
              <Dummyaccordian />
            </div>
            <div className="col-md-9 ">
            <HeatmapLeaf />



<div className="row">

 <div className="col-md-7">
<div  className="dashboard-header row">
            <h3>Time and date range</h3>
</div>
<div className="datepicker-heatmap datepicker-heatmap-position">
            <Mydatepicker />
</div>
            </div>



            <div className="col-md-5">

            <div className="row">
            <InputRange
        maxValue={24}
        minValue={0}
        value={this.state.value}
        onChange={value => this.setState({ value })} />
<div className="col-md-6 padding_left_0"><button type="button" className="heatmap-button">LOAD PRESENT</button></div>
<div className="col-md-6 padding_left_0"><button type="button" className="heatmap-button">SAVE PRESENT</button></div>
            </div>
            </div>
            </div>
            </div>

        </div>
            <div className="row footer">
            
            <div className="col-md-4">
            <a href="http://158.101.193.151/Documents/Noesis cookie and privacy statement V2020.1.pdf">
            <p>Privacy Statement</p>
            </a>
            </div>
            
            <div className="col-md-4">
            <a href="http://158.101.193.151/Documents/Noesis terms and conditions.pdf">
            <p>Terms & Conditions</p>
            </a>
            </div>

            <div className="col-md-4">
            <a href="https://noesis.network/">
            <p>About Us</p>
            </a>
            </div>
            
            </div>
    </div>
    );
  }
}

export default Heatmap;