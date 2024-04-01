import React, { useState } from 'react';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/dashboard';
import Logincontext from './context/Logincontext';
import Adicionar from './pages/Adicionar/Adicionar';
import Editar from './pages/Editar/Editar';
import Remover from './pages/Remover/Remover';
import Listadeprodutos from './pages/Lista de Produtos/Listadeprodutos';


const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Order, setOrder] = useState([])
  const [admin, setAdmin] = useState(false)

  return (
    <Logincontext.Provider
      value={{ 
        username, setUsername,
        password, setPassword,
        error, setError,
        setOrder,Order,
        isLoggedIn, setIsLoggedIn
      }}
    >
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin/adicionar' element={<Adicionar />} />
            <Route path='/admin/Listadeprodutos' element={<Listadeprodutos />}></Route>
            <Route path='/admin/editar' element={<Editar/>}></Route>
            <Route path='/admin/remover' element={<Remover/>}></Route>
          </Routes>
        </div>
      </Router>
    </Logincontext.Provider>
  );
};

export default App;
