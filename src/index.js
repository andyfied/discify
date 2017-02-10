import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './connectors/App';
import Result from './connectors/Result';
import NoMatch from './components/NoMatch';
import Hole from './connectors/Hole';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey800, lime100, lime500} from 'material-ui/styles/colors';

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
    primary1Color: lime500,
    //primary2Color: cyan700,
    //primary3Color: grey400,
    //accent1Color: pinkA200,
    //accent2Color: grey100,
    //accent3Color: grey500,
    textColor: grey800,
    //alternateTextColor: white,
    canvasColor: lime100,
    //borderColor: grey300,
    //disabledColor: fade(darkBlack, 0.3),
    //pickerHeaderColor: cyan500,
    //clockCircleColor: fade(darkBlack, 0.07),
    //shadowColor: fullBlack,
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