import React, {Component} from 'react'
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css' // For some basic styling. (OPTIONAL)

class Mydatepicker extends Component {
  state = {
    dates: null,
    numberOfCalendars: 2
  }
  
  
  onSelect = dates => this.setState({dates})

  render() {
    const numberOfCalendars = 2;
    return (
      <div>
        <DateRangePicker
          onSelect={this.onSelect}
          value={this.state.dates}
          numberOfCalendars={numberOfCalendars}
        />
      </div>
    )
  }
}
export default Mydatepicker;