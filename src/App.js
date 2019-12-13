import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Start from './connectors/Start'
import Result from './connectors/Result'
import NoMatch from './components/NoMatch'
import Hole from './connectors/Hole'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {grey, lime, orange} from '@material-ui/core/colors'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import discifyApp from './reducers'

let store = createStore(
  discifyApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const theme = createMuiTheme({
  palette: {
    primary: { light: lime[300], main: lime[500], dark: lime[700] },
    secondary: { light: orange[300], main: orange[500], dark: orange[700] },
    primary1Color: lime[600],
    //primary2Color: cyan700,
    //primary3Color: grey400,
    //accent1Color: pinkA200,
    //accent2Color: grey100,
    //accent3Color: grey500,
    textColor: grey[800],
    //alternateTextColor: white,
    canvasColor: lime[100],
    //borderColor: grey300,
    //disabledColor: fade(darkBlack, 0.3),
    //pickerHeaderColor: cyan500,
    //clockCircleColor: fade(darkBlack, 0.07),
    //shadowColor: fullBlack,
  },
 });

function App() {
  return (
    <Provider store={ store }>
    <MuiThemeProvider theme={ theme }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Start } />
          <Route path="/results" component={ Result } />
          <Route path="/track/:holeNumber" component={ Hole } />
          <Route component={ NoMatch } />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
  )
}

export default App;
