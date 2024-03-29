import React, { useState } from 'react';
import { ContainerLogin } from './LoginStyle';
import Input from '../../components/Inputs/Input';
import Button from '../../components/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    let isValid = true;

    if (username.length === 0 || password.length === 0) {
      setError('Preencha os campos corretamente');
      isValid = false;
      return; 
    }

    if (username.length === 0) {
      setError('Digite o nome do seu usuário');
      isValid = false;
      return; 
    }

    if (password.length === 0) {
      setError('Digite sua senha');
      isValid = false;
      return; 
    }

    if (!isValid) {
      return;
    }

    e.preventDefault();
    const data = { Username: username, Password: password };
    axios
      .post('http://localhost:3001/user/login', data).then((response) => {
        setResponseData(response.data);
        console.log(response.data);
        navigate('/dashboard');
      })
      .catch((error) => {
        setError('Falha ao logar, por favor, verifique suas credenciais');
        console.error('Login error:', error);
      });
  };

  return (
    <ContainerLogin>
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
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
        <Button childreen="Entrar" type="submit"></Button>
      </form>
      <div className="Join">
        <Link to="/register" className="register">
          Não possui uma conta?
        </Link>
      </div>
    </ContainerLogin>
  );
};

export default Login;
