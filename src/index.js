import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App';
import Result from './connectors/Result';
import NoMatch from './components/NoMatch';
import Hole from './connectors/Hole';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green600} from 'material-ui/styles/colors';

import { createStore } from 'redux';
import { Provider } from 'react-redux'

import discifyApp from './reducers/reducers';

let store = createStore(
  discifyApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green600,
  },
});

ReactDOM.render((
  
  <Provider store={ store }>
    <MuiThemeProvider muiTheme={ muiTheme }>
      <Router history={ browserHistory }>
        <Route path="/" component={ App } />
        <Route path="/track/results" component={ Result } />
        <Route path="/track/:holeNumber" component={ Hole } />
        <Route path="*" component={ NoMatch } />
      </Router>
    </MuiThemeProvider>
  </Provider>),
  document.getElementById('root')
);