import React from 'react'
import './Hole.css'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentRemove from 'material-ui/svg-icons/content/remove'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import { Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right'
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left'


const Hole = ({ score, totalScore, holeNumber, onIncrementClick, onDecrementClick }) => {
  return (
    <div className="wrapper">
      <AppBar
        title={ "Hole " + holeNumber }
        className="header"
        showMenuIconButton={ false }
        iconElementRight={
          <FlatButton 
            label="End game" 
            containerElement={ <Link to={ "/track/results" } /> }
          />
        }
      />
      <div className="main">
        <div className="hole">
          <div className="scorer">
            <FloatingActionButton
              onClick={() => onDecrementClick(holeNumber)}
            >
              <ContentRemove />
            </FloatingActionButton>

            <h1>{ score }</h1>

            <FloatingActionButton
              onClick={ () => onIncrementClick(holeNumber) }
            >
              <ContentAdd />
            </FloatingActionButton>
          </div>
          <div className="totalScore">
          <h2>Total : { totalScore }</h2>
          </div>
        </div>
        
        
      </div>

      <Paper className="footer">
        <IconButton
          disabled={ holeNumber <= 1 ? true : false }
          containerElement={ <Link to={ "/track/" + (Number(holeNumber) - 1) } /> }
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          
          containerElement={ <Link to={ "/track/" + (Number(holeNumber) + 1) } /> }
        >
          <ChevronRight />
        </IconButton>
      </Paper>
    </div>
  );
};

export default Hole