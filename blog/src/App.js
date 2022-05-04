import React from 'react';
import './App.css';
import './style/pages/comm.css';
import './style/pages/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detailed from './pages/detailed';
import Home from './pages/_app';



function App(props) {
  console.log(props, '22222')
  return (
    <>
        <Router>
          <Routes>
            <Route path='/detailed/:id' element={<Detailed/>} />
            <Route path='/' element={<Home/>} />
          </Routes>
        </Router>
    </> 
  )
}
export default App
