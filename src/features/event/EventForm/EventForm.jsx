import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

class EventForm extends Component {
  state = {
    event: emptyEvent
  };

  //If user is opening an existing event, then props.selectedEvent will contain an event that was passed down from EventDashboar to populate the fields
  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event: this.props.selectedEvent
      });
    }
  }
//----------If user clicks on a different event while form is open
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedEvent !== this.state.event) {
      console.log('%c EventForm-ComponentWillReceiveProps-nextProps -','color: red', nextProps)
      this.setState({
        event: nextProps.selectedEvent || emptyEvent
      });
    }
  }
//-----------Logic to choose correct action creator --------
  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.event.id) {
      console.log('%c EventForm - onFormSubmit-Update','color:green')
      this.props.myUpdateEvent(this.state.event);
    } else {
      console.log('%c EventForm - onFormSubmit-createEvent called','color:blue')
      this.props.createEvent(this.state.event);
    }
  };
//----------Local state used to keep track of field changes-------
  onInputChange = e => {
    console.table(this.state.event);
    const newEvent = this.state.event; 
    newEvent[e.target.name] = e.target.value;
    this.setState({
      event: newEvent
    });
  };

  render() {
    const { handleCancel } = this.props;
    const { event } = this.state;
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              value={event.title}
              placeholder="Event Title"
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              type="date"
              value={event.date}
              placeholder="Event Date"
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              value={event.city}
              placeholder="City event is taking place"
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              value={event.venue}
              placeholder="Enter the Venue of the event"
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              value={event.hostedBy}
              placeholder="Enter the name of person hosting"
              onChange={this.onInputChange}
            />
          </Form.Field>
          <Button onClick={this.onFormSubmit} positive type="submit">
            Submit
          </Button>
          <Button onClick={handleCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
