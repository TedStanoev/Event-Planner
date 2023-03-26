import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import './Home.css';

import EventCard from '../../components/events/EventCard';

import { getPublicHangouts } from '../../api/hangouts/hangouts';

const Home = (props) => {
  return (
    <Container>
      {props.events.length > 0 ? (
        props.events.map((ev) => (
          <Row>
            <EventCard ev={ev} />
          </Row>
        ))
      ) : (
        <h1 id="no-events-heading">No Events Available!</h1>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  events: state.events.publicEvents,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(getPublicHangouts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
