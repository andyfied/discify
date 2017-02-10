import React from 'react';
import { connect } from 'react-redux';
import { clearScore } from '../actions/actions';
import AppLayout from '../layouts/App';

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClearScore : () => {
      dispatch(clearScore());
    },
  }
}

class _App extends React.Component {

  componentWillMount() {
    this.props.onClearScore();
  }

  render() {
    return (
      <AppLayout />
    );
  }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(_App)

export default App;