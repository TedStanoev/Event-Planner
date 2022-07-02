import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import './Home.css'

import logo from '../../logo.svg';

import { changeText } from '../../redux/slices/homeSlice'

const Home = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleWelcomeTextChange = () => {
    console.log(inputValue);
    props.changeText(inputValue);
  }

  return (
    <div>
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <input value={inputValue} onChange={(ev) => setInputValue(ev.currentTarget.value)} />
        <button onClick={handleWelcomeTextChange}>Change text</button>
        <p>{props.user?.email ? `Welcome ${props.user.email}` : 'Log in'}</p>
      </header>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user,
  welcomeText: state.home.welcomeText,
});

const mapDispatchToProps = dispatch => ({
  changeText: text => dispatch(changeText(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
