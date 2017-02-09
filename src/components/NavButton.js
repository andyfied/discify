import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const NavButton = ({ enabled, link, label }) => {

  if (enabled) {
    return (
      <div>
        <RaisedButton
          label={ label }
          primary={ true }
          containerElement={ <Link to={ link } /> }
        />
      </div>
    );
  }

  return (
      <div>
        <RaisedButton
          label={ label }
          disabled={ true }
        />
      </div>
    );
};

export default NavButton;