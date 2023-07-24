import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import About from './pages/About'
import { store } from '@/app/store'
import { Provider } from 'react-redux'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
