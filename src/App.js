import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';

import Navigation from './components/navigation/Navigation';
import { userSignedIn } from './redux/slices/authSlice';
import { signInUser } from './api/auth';

const App = props => {
  useEffect(() => {
    signInUser()
      .then(user => {
        console.log(`User:`);
        console.log(user);
        props.userSignedIn(user);
      })
      .then(() => console.log(props))
  }, [])

  return (
    <div className="App">
      <Navigation />
      <Container className="main-content">
        <Outlet/>
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  userSignedIn: user => dispatch(userSignedIn(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
