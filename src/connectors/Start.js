import React from 'react'
import { connect } from 'react-redux'
import { clearScore } from '../actions/results'
import { clearHoles } from '../actions/holes'
import StartLayout from '../layouts/Start'

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClearScore : () => {
      dispatch(clearScore())
    },
    onClearHoles : () => {
      dispatch(clearHoles())
    }
  }
}

class _Start extends React.Component {

  componentWillMount() {
    this.props.onClearScore()
    this.props.onClearHoles()
  }

  componentDidMount() {
    window.addEventListener('beforeinstallprompt', event => {
      console.log("BEFORE INSTALL!")

      if ((window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true)  {
        console.log("App already installed")
        return false;
      }
    })
  }

  render() {
    return (
      <StartLayout />
    )
  }
}

const Start = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Start)

export default Start