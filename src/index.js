import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'

import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'

import reducers from './redux/reducers'


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'DM Sans, sans-serif',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: 'rgb(255, 255, 255)',
          border: '1px solid rgb(222, 222, 222)',
          boxSizing: 'border-box',
          borderRadius: '8px',
          height: 'max-content',
          boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 10px',
        },
      },
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
    ,
  </Provider>,
)


