import { connect } from 'react-redux'
import ResultLayout from '../layouts/Result'

const getTotalScore = (holes) => {
    if (holes && Object.keys(holes).length > 0) {
        //create-react-app does not seem to support es2017 for the moment
        //return Object.values(holes).reduce((a, b) => a + b)
        let score = 0
        for (let key of Object.keys(holes)) {
            score += holes[key]
        }
        return score
    } else {
        return 0
    }
}

const getLastHole = (holes) => {
    if (holes) {
        var holeNumbers = Object.keys(holes)
        return holeNumbers[holeNumbers.length -1]
    }

    return 0
}

const mapStateToProps = (state) => ({
    score: getTotalScore(state.holes),
    lastHole: getLastHole(state.holes)
})

const Result = connect(
    mapStateToProps
)(ResultLayout)

export default Result