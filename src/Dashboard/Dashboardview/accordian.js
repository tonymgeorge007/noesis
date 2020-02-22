import React, { Component } from 'react';
import './heatmap.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


class Dummyaccordian extends Component {
        state = {
  }

  render() {

    
    return (
    <div>

            <div className="dashboard-header accordian_h3">
              <h3>Filter</h3>
              </div>


<Accordion className="dummy-accordian" allowZeroExpanded={true}   >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Sound category
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
       <form>
        <label>
          <input
            name="isGoing"
            type="checkbox" />
             Traffic
          </label>
        <br />
        <label>
                  <input
            name="isGoing"
            type="checkbox" />
             Chattering
          </label>
        <br />
        <label>
                  <input
            name="isGoing"
            type="checkbox" />
             Music
          </label>
        <br />
        <label>
                  <input
            name="isGoing"
            type="checkbox" />
             Gunshot
          </label>
        <br />
        <label>
                  <input
            name="isGoing"
            type="checkbox" />
             Other
          </label>

      </form>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Sound Intensity
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
      <form>
        <label>
          <input
            name="isGoing"
            type="checkbox" />
             Low
          </label>
        <br />
        <label>
                  <input
            name="isGoing"
            type="checkbox" />
             Mid
          </label>
        <br />
        <label>
                  <input
            name="isGoing"
            type="checkbox" />
             High
          </label>
        <br />

      </form>
                </AccordionItemPanel>
            </AccordionItem>
                        <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Area
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
      <form>
        <label>
          <input
            name="isGoing"
            type="checkbox" />
             Ring road
          </label>
        <br />
        <label>
                  <input
            name="isGoing"
            type="checkbox" />
             Highway
          </label>
        <br />
        <label>
                  <input
            name="isGoing"
            type="checkbox" />
             Downtown
          </label>
        <br />

      </form>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

    </div>
    );
  }
}

export default Dummyaccordian;