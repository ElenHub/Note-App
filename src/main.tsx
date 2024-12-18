import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import store from '../src/store/store.ts'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

const baseUrl = import.meta.env.VITE_BASE_URL || '/Note-App/';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename={baseUrl}>
  <Provider store={store}>
    <App/>
    </Provider>
    </BrowserRouter>
    </React.StrictMode>
)
