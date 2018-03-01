import React, { Component } from 'react';
import logo from 'statics/logo.svg';
import './App.css';
import Button from 'material-ui/Button';
import Reboot from 'material-ui/Reboot';
import ClippedDrawer from 'scenes/sidenavbar/ClippedDrawer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Reboot />
      <ClippedDrawer />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Button variant="raised" color="primary">
          	Hello world !
          </Button>
      </div>
    );
  }
}

export default App;
