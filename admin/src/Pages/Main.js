import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminIndex from './AdminIndex';
import Login from './Login';

function Main() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Login/>} />
                <Route path='/index' exact element={<AdminIndex/>} />
            </Routes>
        </Router>
    )
}
export default Main
