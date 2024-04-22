/* eslint-disable react/no-children-prop */
import React, { useContext, useState } from 'react';
import { ContainerLogin } from './LoginStyle';
import Input from '../../components/Inputs/Input';
import Button from '../../components/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logincontext from '../../context/Logincontext';
import Pizzaiolo from '../../assets/pizzaiolo.png';
import Loading from '../../components/Loading/Loading';
import Header from '../../components/header/Header'
import Headerstart from '../../components/Headerstart/Headerstart';

const Login = () => {
  const navigate = useNavigate();
  const { setError, error, username, setUsername, password, setPassword, getuser, setGetuser} = useContext(Logincontext);
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
  
    if (username.trim() === '' || password.trim() === '') {
      setError('Preencha os campos corretamente');
      setLoading(false); 
      return;
    }
  
    try {
      const response = await axios.get('https://pizzariamania3.onrender.com/user/login');
      const users = response.data;
      
      const user = users.find(user => user.Username === username);

  
      if (!user) {
        setError('Usuário não encontrado');
        setLoading(false)
      }else{
        setGetuser(user)
      }

      console.log(getuser)
  
      sessionStorage.setItem('accessToken', response.data.accessToken);
      sessionStorage.setItem('user', JSON.stringify(user));
  
      setError('');
      navigate('/dashboard');
    } catch (error) {
      setError('Falha ao logar, por favor, verifique suas credenciais');
      console.error('Login error:', error);
    } finally {
      setLoading(false); 
    }
  };
  
  return (
    <ContainerLogin>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              htmlFor="login"
              id="login"
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              htmlFor="password"
              id="password"
            />
            {error && <p id="error">{error}</p>}
            <Button className="Entrar" children='Entrar' type="submit" />
            <div className="Join">
              <Link to="/register" className="register">
                Não possui uma conta?
              </Link>
            </div>
          </form>
        </>
      )}
      {!loading && (
        <div>
          <img id="pizzaiolo" src={Pizzaiolo} alt="" />
        </div>
      )}
    </ContainerLogin>
  );
};

export default Login;
