import React from 'react';
import { connect } from 'react-redux';
import { incrementScore, decrementScore, addHole } from '../actions/actions';
import HoleLayout from '../layouts/Hole';


const mapStateToProps = (state, ownProps) => {
  return {
    score: state.holes[ownProps.params.holeNumber],
    holeNumber: ownProps.params.holeNumber
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: (holeNumber) => {
      dispatch(incrementScore(holeNumber));
    },
    onDecrementClick: (holeNumber) => {
      dispatch(decrementScore(holeNumber));
    },
    onAddHole: (holeNumber) => {
      dispatch(addHole(holeNumber));
    }
  }
}

class _Hole extends React.Component {

  componentWillMount() {
    this.props.onAddHole(this.props.holeNumber);
  }

  componentDidUpdate() {
    // Make sure the hole is added. Probably not a pritty way of solving the problem 
    this.props.onAddHole(this.props.holeNumber);
  }

  render() {
    return (
      <HoleLayout
        score={ this.props.score }
        holeNumber={ this.props.holeNumber }
        onIncrementClick={ this.props.onIncrementClick }
        onDecrementClick={ this.props.onDecrementClick }
      />
    );
  }
}

const Hole = connect(
mapStateToProps,
mapDispatchToProps
)(_Hole)

export default Hole;