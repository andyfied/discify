import React from 'react'

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import SnackbarContent from '@material-ui/core/SnackbarContent';

import './Start.css'

const Start = ({ showInstallPrompt, onInstall }) => (
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
    <div>
      { showInstallPrompt
        ? <SnackbarContent message="Please install me to smoothify your experience!" action={
          <Button color="secondary" size="small" onClick={onInstall}>
            Install
          </Button>
        } />
        : null
      }
      
    </div>
    
  </div>
  )

  export default Start
  