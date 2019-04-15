import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from './components/App'

import rootReducer from './Redux/Reducers'

import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { teal, cyan } from '@material-ui/core/colors'

const theme = createMuiTheme({
	palette: {
		primary: teal,
		secondary: cyan
	}
})

const store = createStore(rootReducer,
	applyMiddleware(thunk))

const wrappedApp =
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Typography />
			<App />
		</MuiThemeProvider>
	</Provider>

ReactDOM.render(wrappedApp, document.getElementById(`root`))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()