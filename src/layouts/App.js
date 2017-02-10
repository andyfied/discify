import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

import './App.css';


class App extends Component {

  render() {
    return (
        <div className="App wrapper">
          <div className="main">
            <h1>Discify</h1>
            <h2>Your number one score tracker</h2>
            <RaisedButton 
              label="Play!"
              primary={true}
              containerElement={ <Link to="/track/1" /> }
            />
          </div>
        </div>
    );
  }
}

export default App;
