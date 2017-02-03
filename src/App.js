import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {green600} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green600,
  },
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <h1>Discify</h1>
          <h2>Your number one score tracker</h2>
          <RaisedButton 
            label="Play!"
            primary={true}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
