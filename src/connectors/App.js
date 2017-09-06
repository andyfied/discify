import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { clearScore } from '../actions/results'
import { clearHoles } from '../actions/holes'
import AppLayout from '../layouts/App'

import Result from './Result'
import Start from './Start'
import LoginWall from './LoginWall'
import NoMatch from '../components/NoMatch'
import Hole from './Hole'

const mapStateToProps = (state) => {
    return {
      authToken: state.auth.token
    }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

class _App extends React.Component {

  render({
    authToken,
  } = this.props) {
    const authenticated = authToken ? true : false

    const AuthenticatedRoute = ({ authenticated, component, ...rest }) => (
      <Route {...rest} render={(props) => {
        return authenticated ?
        (React.createElement(component, { ...props, authenticated })) :
        (<Redirect to="/login" />);
      }} />
    )
    return (
      <Router>
        <Switch>
          <Route path="/login" component={ LoginWall } {...this.props} />
          <AuthenticatedRoute exact path="/" authenticated={authenticated} component={ Start } {...this.props} />
          <AuthenticatedRoute path="/track/results" authenticated={authenticated} component={ Result } {...this.props} />
          <AuthenticatedRoute path="/track/:holeNumber" authenticated={authenticated} component={ Hole } {...this.props} />
          <Route path="*" component={ NoMatch } />
        </Switch>
      </Router>
    )
  }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(_App)

export default App