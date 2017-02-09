import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import NavButton from '../components/NavButton';

const Hole = ({ score, holeNumber, onIncrementClick, onDecrementClick }) => {
  //THis might not be the most pritty solution
  if (!score) {
    //onAddHole(holeNumber);
  }
  return (
    <div>
      <NavButton
        enabled={ true }
        label="End game"
        link={ "/track/results" }
      />
      <h1>Hole { holeNumber }</h1>
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

      <div>
        <NavButton
          enabled={ holeNumber <= 1 ? false : true }
          label="Prev"
          link={ "/track/" + (Number(holeNumber) - 1) }
        />
        <NavButton
          enabled={ true }
          label="Next"
          link={ "/track/" + (Number(holeNumber) + 1) }
        />
      </div>
    </div>
  );
};

export default Hole;