// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/dashboard'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
