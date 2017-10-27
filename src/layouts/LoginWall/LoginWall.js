import React from 'react'

import FacebookLogin from 'react-facebook-login'
import config from '../../config/facebook'

import './LoginWall.css'


const LoginWall = ({loginCallback}) =>
{
  console.log(loginCallback)
  return (
    <div className="LoginWall wrapper">
      <div className="main">
        <h1>Discify</h1>
        <h2>Your number one score tracker</h2>
        <FacebookLogin
          appId={config.appId}
          autoLoad={config.autoLoad}
          fields={config.fields}
          //onClick={componentClicked}
          callback={loginCallback}
      />
      </div>
    </div>
  )
} 

export default LoginWall
