import React, { useState } from 'react';
import Home from './pages/home/Home';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/dashboard';
import Logincontext from './context/Logincontext';
import Adicionar from './pages/Adicionar/Adicionar';
import Editar from './pages/Editar/Editar';
import Remover from './pages/Remover/Remover';
import Listadeprodutos from './pages/Lista de Produtos/Listadeprodutos';
import Headerstart from './components/Headerstart/Headerstart';
import Minhaconta from './pages/Minhaconta/Minhaconta';


const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Order, setOrder] = useState([])
  const [cartitems, setCartitems] = useState([])
  const [modalvisible, setModalvisible] = useState(false)
  const [count, setCount] = useState(1)
  const [getuser, setGetuser] = useState(null);
  const [useropen, setUseropen] = useState(false)
  const [loading, setLoading] = useState(false);
  const [getcartitens, setGetcartitens] = useState([])


  const [nomeProduto, setNomeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [urlImagem, setUrlImagem] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');


  const [getProduct, setGetproduct] = useState('')
  const [getdescription, setGetdescription] = useState('')
  const [geturl, setGeturl] = useState('')
  const [getprice, setGetprice] = useState('')
  const [getid, setGetid] = useState()
  

  return (
    <Logincontext.Provider
      value={{ 
        username, setUsername,
        password, setPassword,
        error, setError,
        setOrder,Order,
        isLoggedIn, setIsLoggedIn,
        cartitems, setCartitems,
        modalvisible, setModalvisible,
        count, setCount,
        getuser, setGetuser,
        useropen, setUseropen,
        loading, setLoading,
        getcartitens, setGetcartitens,
        nomeProduto, setNomeProduto,
        descricaoProduto, setDescricaoProduto,
        urlImagem, setUrlImagem,
        precoProduto, setPrecoProduto,
        getProduct, setGetproduct,
        getdescription, setGetdescription,
        geturl, setGeturl,
        getprice, setGetprice,
        getid, setGetid
        
      }}
    >
      <Router>
        
        <div>
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
            <Route path='/minhaconta' element={<Minhaconta/>}></Route>
          </Routes>
        </div>
      </Router>
    </Logincontext.Provider>
  );
};

export default App;