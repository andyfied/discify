import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

class Result extends Component {

  render() {
    return (
      <div>
        <h1>Results</h1>
        <h2>Score: { this.props.score }</h2>
        <h3>Details</h3>
        <RaisedButton
          label="Play again!"
          primary={ true }
          containerElement={ <Link to="/track/1" /> }
        />
      </div>
    );
  }
}

export default Result;