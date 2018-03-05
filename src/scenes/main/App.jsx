import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';
import ClippedDrawer from 'scenes/sidenavbar/ClippedDrawer';

class App extends Component {

  render() {
    return (
      <div>
        <Reboot />
      <ClippedDrawer />
      </div>
    );
  }
}

export default App;
