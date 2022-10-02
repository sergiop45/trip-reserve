import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservas  from './pages/Reservas';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>

        <Route element={<App/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/reservas' element={<Reservas/>} />
        </Route>
      
      </Routes>
    
  </BrowserRouter>
  </React.StrictMode>
)
