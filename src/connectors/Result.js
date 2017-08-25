import { connect } from 'react-redux'
import ResultLayout from '../layouts/Result'


const getLastHole = (holes) => {
    if (holes) {
        var holeNumbers = Object.keys(holes)
        return holeNumbers[holeNumbers.length -1]
    }

    return 0
}

const mapStateToProps = (state) => ({
    score: state.results.totalScore,
    lastHole: getLastHole(state.holes)
})

const Result = connect(
    mapStateToProps
)(ResultLayout)

export default Result