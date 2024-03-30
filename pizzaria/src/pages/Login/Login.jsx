import React, { useContext, useState } from 'react';
import { ContainerLogin } from './LoginStyle';
import Input from '../../components/Inputs/Input';
import Button from '../../components/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logincontext from '../../context/Logincontext';

const Login = () => {
const navigate = useNavigate()
  const {setError, error, username, setUsername, password, setPassword} = useContext(Logincontext)

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      setError('Preencha os campos corretamente');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/user/login', {
        Username: username,
        Password: password,
      });

      if (response.data.error) {
        setError(response.data.error);
      } else {
        setError('');
        navigate('/dashboard');
      }
    } catch (error) {
      setError('Falha ao logar, por favor, verifique suas credenciais');
      console.error('Login error:', error);
    }
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
        <Button childreen='Entrar' type="submit" />
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
