import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import New from './pages/New'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route path='/home' element={<App/>} />
          <Route path='/new' element={<New/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
