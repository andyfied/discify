import React from 'react'
import { connect } from 'react-redux'
import { incrementScore, decrementScore, addHole } from '../actions/holes'
import { decrementTotalScore, incrementTotalScore } from '../actions/results'
import HoleLayout from '../layouts/Hole'


const mapStateToProps = (state, ownProps) => {
  return {
    score: state.holes[ownProps.match.params.holeNumber],
    totalScore: state.results.totalScore,
    holeNumber: ownProps.match.params.holeNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: (holeNumber) => {
      dispatch(incrementScore(holeNumber))
      dispatch(incrementTotalScore())
    },
    onDecrementClick: (holeNumber) => {
      dispatch(decrementScore(holeNumber))
      dispatch(decrementTotalScore())
    },
    onAddHole: (holeNumber) => {
      dispatch(addHole(holeNumber))
    }
  }
}

class _Hole extends React.Component {

  componentWillMount() {
    this.props.onAddHole(this.props.holeNumber)
  }

  componentDidUpdate(prevProps) {

    console.log("did update")
    // Make sure the hole is added. Probably not a pritty way of solving the problem
    const prevHole = parseInt(prevProps.holeNumber)
    const nextHole = parseInt(this.props.holeNumber)

    if (isNaN(prevHole) || isNaN(nextHole)) {
      return
    }

    if (prevHole < nextHole) {
      this.props.onAddHole(this.props.holeNumber)
    }
  }

  render() {
    return (
      <HoleLayout
        score={ this.props.score }
        totalScore={ this.props.totalScore }
        holeNumber={ this.props.holeNumber }
        onIncrementClick={ this.props.onIncrementClick }
        onDecrementClick={ this.props.onDecrementClick }
      />
    )
  }
}

const Hole = connect(
mapStateToProps,
mapDispatchToProps
)(_Hole)

export default Hole