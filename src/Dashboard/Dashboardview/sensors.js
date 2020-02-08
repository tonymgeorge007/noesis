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


class Sensors extends Component {
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

              <h3>Sensors</h3>
            
              <Dropdown>
  <Dropdown.Toggle className="username" variant="success" id="dropdown-basic">
  <span><img src={user} alt="User" className="userpic" />{localStorage.getItem("username")}</span>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={this.logout}>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </div>



    </div>
    );
  }
}

export default Sensors;