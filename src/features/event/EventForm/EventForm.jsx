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

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event: this.props.selectedEvent
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedEvent !== this.state.event) {
      this.setState({
        event: nextProps.selectedEvent || emptyEvent
      });
    }
  }

  onFormSubmit = e => {
    e.preventDefault();
    console.log('event id is ', this.state.event.id)
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
    } else {
      this.props.createEvent(this.state.event);
    }
  };

  onInputChange = e => {
    console.table(this.state.event);
    const newEvent = this.state.event; // In order to set the state of an object with multiple changing field values, you have to first capture all the current object property values in a new object, then update the specific property with the event name and value and then completely replace the object that is stored in the state object.
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
