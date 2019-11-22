import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Start from './connectors/Start'
import Result from './connectors/Result'
import NoMatch from './components/NoMatch'
import Hole from './connectors/Hole'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {grey800, lime100, lime600} from 'material-ui/styles/colors'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import discifyApp from './reducers'

let store = createStore(
  discifyApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lime600,
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
})

function App() {
  return (
    <Provider store={ store }>
    <MuiThemeProvider muiTheme={ muiTheme }>
      <BrowserRouter>
        <Route exact path="/" component={ Start } />
        <Route path="/track/results" component={ Result } />
        <Route path="/track/:holeNumber" component={ Hole } />
        <Route path="*" component={ NoMatch } />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
  )
}

export default App;
