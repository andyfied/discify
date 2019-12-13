import React from 'react'

import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

import './Start.css'

const action = (
  <Button color="secondary" size="small">
    Install
  </Button>
);

const Start = ({ isOpen }) => (
  <div className="App wrapper">
    <div className="main">
      <h1>Discify</h1>
      <h2>Your number one score tracker</h2>
      <Button
        color="primary"
        variant="contained">
        <Link to="/track/1">Play!</Link>
      </Button>
    </div>
  </div>
  )

  export default Start
  