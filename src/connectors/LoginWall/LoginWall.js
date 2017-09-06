import React from 'react'

import { connect } from 'react-redux'
import LoginWallLayout from '../../layouts/LoginWall'
import { authSetToken, authSetUser } from '../../actions/auth'


const mapStateToProps = (state) => ({
  token: state.auth.token
})

const mapDispatchToProps = (dispatch) => ({
  setToken : (token) => {
    dispatch(authSetToken(token))
  },
  setUser : (user) => {
    dispatch(authSetUser(user))
  },
})

class LoginWall extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps")
    //nextProps.token
    if (nextProps.token) {
      nextProps.history.push('/')
    }
  }

  render() {
    const {
      setToken,
      setUser,
    } = this.props
    
    const doLogin = (response) => {
      console.log(response)
      if (response.accessToken) {
        setToken(response.accessToken)
        setUser({
          id: response.id,
          name: response.name, 
        })
      }
    }

    return (
      <div>
        <LoginWallLayout
          loginCallback={doLogin}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginWall)
