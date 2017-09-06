import React from 'react'

import FacebookLogin from 'react-facebook-login'
import config from '../../config/facebook'


const LoginWall = ({loginCallback}) =>
{
  console.log(loginCallback)
  return (
    <div>
      <h1>Please login</h1>
      <FacebookLogin
        appId={config.appId}
        autoLoad={config.autoLoad}
        fields={config.fields}
        //onClick={componentClicked}
        callback={loginCallback}
      />
    </div>
  )
} 

export default LoginWall
