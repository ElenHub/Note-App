import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import store from '../src/store/store.ts'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <App/>
    </Provider>
    </BrowserRouter>
)
