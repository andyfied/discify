import React from 'react'
import { connect } from 'react-redux'
import { clearScore } from '../actions/results'
import { clearHoles } from '../actions/holes'
import StartLayout from '../layouts/Start'
import { showInstallPrompt } from '../actions/installPrompt'

let deferredPrompt;

const mapStateToProps = (state) => {
    return {
      showInstallPrompt: state.installPrompt.showInstallPrompt,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClearScore : () => {
      dispatch(clearScore())
    },
    onClearHoles : () => {
      dispatch(clearHoles())
    },
    onShowInstallPrompt: (show) => {
      dispatch(showInstallPrompt(show))
    }
  }
}

class _Start extends React.Component {
  componentWillMount() {
    this.props.onClearScore()
    this.props.onClearHoles()
  }

  onInstall() {
    deferredPrompt.prompt();  // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'dismissed') {
        console.log("User dismissed the install dialog")
        // TODO close install prompt
      }
      deferredPrompt = null;
    })
  }

  componentDidMount() {
    window.addEventListener('beforeinstallprompt', event => {

      // Prevent Chrome 67 and earlier from automatically showing the prompt
      event.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = event;
      
      this.props.onShowInstallPrompt(true)
    })
  }

  render() {
    return (
      <StartLayout showInstallPrompt={this.props.showInstallPrompt} onInstall={this.onInstall} />
    )
  }
}

const Start = connect(
    mapStateToProps,
    mapDispatchToProps
)(_Start)

export default Start