import React from 'react';
import './App.css';
import './style/pages/comm.css';
import './style/pages/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detailed from './pages/detailed';
import Home from './pages/_app';
import List from './pages/list';

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/detailed/:id' element={<Detailed/>} />
            <Route path='/list/:id' element={<List/>} />
          </Routes>
        </Router>
    </> 
  )
}
export default App
