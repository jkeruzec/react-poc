import React, { Component } from 'react';
//import Reboot from 'material-ui/Reboot';
import ClippedDrawer from 'scenes/sidenavbar/ClippedDrawer';
import { observer } from 'mobx-react';

@observer
class App extends Component {

  render() {
    return (
      <div>
      <ClippedDrawer />
      </div>
    );
  }
}

export default App;
