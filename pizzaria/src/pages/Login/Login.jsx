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

const Login = () => {
  const navigate = useNavigate();
  const { setError, error, username, setUsername, password, setPassword, setGetuser } = useContext(Logincontext);
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
      const response = await axios.post('https://backendpizzaria.onrender.com/user/auth', { username, password });
  
      const accessToken = response.data.accessToken;
      const userData = response.data.user;
  
      setGetuser(userData);
  
      if (!userData || !accessToken) {
        setError('Usuário não encontrado');
        setLoading(false);
        return;
      }
  
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('userData', JSON.stringify(userData));
  
      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('userData', JSON.stringify(userData));
  
      setError('');
      navigate('/dashboard');
    } catch (error) {
      // Aqui você trata os erros que podem ocorrer durante a requisição HTTP
      setError('Credenciais invalidas');
      setLoading(false);
    }
  };
  
  
  

  return (
    <ContainerLogin>
      {loading ? (
        <Loading />
      ) : (
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
            <Link id='link' to="/register" className="register">
              Não possui uma conta?
            </Link>
          </div>
        </form>
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
