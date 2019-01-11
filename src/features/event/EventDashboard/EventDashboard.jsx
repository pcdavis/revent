import React, { Component } from "react";
import { connect } from 'react-redux';
import cuid from "cuid";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";
import { createEvent, updateEvent, deleteEvent } from '../../event/eventActions'

//----Redux state and action creators-----------
const mapState = (state) => ({
  events: state.events
})
const actions = {
  createEvent,
  updateEvent,
  deleteEvent
}
class EventDashboard extends Component {
  //--------Local State -------------to tell form open/close and blank (i.e. new event) or populated (or existing event) fields
  state = {
    isOpen: false,
    selectedEvent: null
  };

//-----------handlers and action creators----------------------

// If user clicks Create Event <Button/>
   handleFormOpen = () => {
    this.setState({ isOpen: true, selectedEvent: null });
  };
//If user clicks Form's cancel <Button/> 
  handleCancel = () => {
    this.setState({ isOpen: false });
  };
// If user clicks Form's Submit <Button/> while editing an existing event
  handleUpdateEvent = (updatedEvent) => {
    console.log('handleUpdateEvent fired and here is the vent', updateEvent)
    this.props.updateEvent(updatedEvent);
    this.setState({
      isOpen: false,
      selectedEvent: null
    });
  }
  // If user clicks EventListItem's View <Button/>
  handleOpenEvent = (eventToOpen) => (e) => {
    console.log('just selected this event obj', eventToOpen)
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    });
  };
// If user clicks the Form's Submit <Button/> for a new event
  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.props.createEvent(newEvent)
    this.setState({
      isOpen: false
    });
  };
// If user clicks Delete <Button/> in the EventListItem
  handleDeleteEvent = (eventId) => ()=> {
    const { deleteEvent } = this.props;
    deleteEvent(eventId)
  }
  
  render() {
    const { selectedEvent } = this.state;
    const {events} = this.props;
    console.log("%c EventDashboard-render - actions",'color:purple', actions)

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            onEventOpen={this.handleOpenEvent}
            deleteEvent={this.handleDeleteEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            positive
            content="Create Event"
            onClick={this.handleFormOpen}
          />
          {this.state.isOpen && (
            <EventForm
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              myUpdateEvent={this.handleUpdateEvent}
              handleCancel={this.handleCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}



export default connect(mapState, actions)(EventDashboard);
