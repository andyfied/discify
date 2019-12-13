import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import './result.css'

class Result extends Component {

  render() {
    return (
      <div className="wrapper">
        <AppBar 
          title="Results"
          className="header"
        >
          <Toolbar>
            <Button>
              <Link to={ "/" }>New game</Link>
            </Button>
          </Toolbar>
        </AppBar>
        <div className="main result">
          <h1>{ this.props.score }</h1>
        </div>
        <Paper className="footer">
          <Button>
            <Link to={ "/track/" + this.props.lastHole }>Resume game</Link>
          </Button>
        </Paper>
      </div>
    )
  }
}

export default Result