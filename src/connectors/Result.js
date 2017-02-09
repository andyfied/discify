import { connect } from 'react-redux';
import ResultLayout from '../layouts/Result';

const getTotalScore = (holes) => {
    if (holes && Object.keys(holes).length > 0) {
        return Object.values(holes).reduce((a, b) => a + b);
    } else {
        return 0;
    }
}

const mapStateToProps = (state) => ({
    score: getTotalScore(state.holes)
})

const Result = connect(
    mapStateToProps
)(ResultLayout);

export default Result;