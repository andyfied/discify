import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import './index.css'

import App from './connectors/App'

import injectTapEventPlugin from 'react-tap-event-plugin'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {grey800, lime100, lime600} from 'material-ui/styles/colors'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from "redux-logger"

import discifyApp from './reducers'


let store = createStore(
  discifyApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

injectTapEventPlugin()

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

ReactDOM.render((
  
  <Provider store={ store }>
    <MuiThemeProvider muiTheme={ muiTheme }>
      <App />
    </MuiThemeProvider>
  </Provider>),
  document.getElementById('root')
)