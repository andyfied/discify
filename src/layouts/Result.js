import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import './result.css';

class Result extends Component {

  render() {
    return (
      <div className="wrapper">
        <AppBar 
          title="Results"
          className="header"
          showMenuIconButton={ false }
          iconElementRight={
          <FlatButton 
            label="New game"
            containerElement={ <Link to={ "/" } /> }
          />
        }
        />
        <div className="main result">
          <h1>{ this.props.score }</h1>
        </div>
        <Paper className="footer">
          <FlatButton
            label="Resume game"
            primary={ true }
            containerElement={ <Link to={ "/track/" + this.props.lastHole } /> }
          />
        </Paper>
      </div>
    );
  }
}

export default Result;