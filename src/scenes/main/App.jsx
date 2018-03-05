import React, { Component } from 'react';
import './App.css';
import Reboot from 'material-ui/Reboot';
import ClippedDrawer from 'scenes/sidenavbar/ClippedDrawer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Reboot />
      <ClippedDrawer />
      </div>
    );
  }
}

export default App;
