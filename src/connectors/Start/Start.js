import React from 'react'
import { connect } from 'react-redux'
import { clearScore } from '../../actions/results'
import { clearHoles } from '../../actions/holes'
import AppLayout from '../../layouts/App'

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

  render() {
    return (
      <AppLayout />
    )
  }
}

const Start = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Start)

export default Start