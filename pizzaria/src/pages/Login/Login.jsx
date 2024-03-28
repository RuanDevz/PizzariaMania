import React, { useState } from 'react';
import { ContainerLogin } from './LoginStyle';
import Input from '../../components/Inputs/Input';
import Button from '../../components/button/Button';
import { Link, useNavigate } from 'react-router-dom'; // Importe useNavigate
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate para acessar a função de navegação

  const LoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/register', {
        email: email,
        password: password,
      });

      if (response.data.success) {
       
        navigate('/dashboard'); 
      } else {

        setError('Credenciais inválidas. Verifique seu email e senha.');
      }
    } catch (error) {
      console.log(error)
      setError('Erro ao realizar o login. Tente novamente mais tarde.');
    }
  };

  return (
    <ContainerLogin>
      <h1>Login</h1>
      <form onSubmit={LoginSubmit}>
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        {error && <p id='error'>{error}</p>}
        <Button childreen='Entrar' type="submit"></Button>
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
