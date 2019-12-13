import React from 'react'
import { Link } from 'react-router-dom'
import './Hole.css'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { grey } from '@material-ui/core/colors';


const Hole = ({ score, totalScore, holeNumber, onIncrementClick, onDecrementClick }) => {
  return (
    <div className="wrapper">
      <AppBar
        className="header"
      >
        <Toolbar>
          <h1 className="homeNumber">{ `Hole ${holeNumber}` }</h1>
          <Button>
            <Link to={ "/results" }>End game</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <div className="main">
        <div className="hole">
          <div className="scorer">
            <Fab
              color="primary"
              onClick={() => onDecrementClick(holeNumber)}
            >
              <RemoveIcon style={{ color: grey[600] }} />
            </Fab>

            <h1>{ score }</h1>

            <Fab
              color="primary"
              onClick={ () => onIncrementClick(holeNumber) }
            >
              <AddIcon style={{ color: grey[600] }} />
            </Fab>
          </div>
          <div className="totalScore">
          <h2>Total : { totalScore }</h2>
          </div>
        </div>
      </div>

      <Paper className="footer">
        <IconButton
          disabled={ holeNumber <= 1 ? true : false }
        >
          <Link to={ "/track/" + (Number(holeNumber) - 1) }><ChevronLeftIcon /></Link>
        </IconButton>
        <IconButton>
          <Link to={ "/track/" + (Number(holeNumber) + 1) }><ChevronRightIcon /></Link>
        </IconButton>
      </Paper>
    </div>
  );
};

export default Hole