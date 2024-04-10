import React, { useContext, useState } from 'react';
import { ContainerLogin } from './LoginStyle';
import Input from '../../components/Inputs/Input';
import Button from '../../components/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logincontext from '../../context/Logincontext';
import Pizzaiolo from '../../assets/pizzaiolo.png'

const Login = () => {
const navigate = useNavigate()
  const {setError, error, username, setUsername, password, setPassword} = useContext(Logincontext)
  const {admin, setAdmin} = useContext(Logincontext)

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

      sessionStorage.setItem("accessToken", response.data)

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
        <Button className='Entrar' childreen='Entrar' type="submit" />
        <div className="Join">
        <Link to="/register" className="register">
          Não possui uma conta?
        </Link>
      </div>
      </form>
      <div>
        <img id='pizzaiolo' src={Pizzaiolo} alt="" />
      </div>
    </ContainerLogin>
  );
};

export default Login;