import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import Track from './Track';
import Result from './Result';
import NoMatch from './NoMatch';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green600} from 'material-ui/styles/colors';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green600,
  },
});

ReactDOM.render((
  <MuiThemeProvider muiTheme={ muiTheme }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App } />
      <Route path="/track/:trackNumber" component={ Track } />
      <Route path="/result" component={ Result } />
      <Route path="*" component={ NoMatch } />
    </Router>
  </MuiThemeProvider>),
  document.getElementById('root')
);
