import React, { useState } from 'react';
import { ContainerLogin } from './LoginStyle';
import Input from '../../components/Inputs/Input';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });

      if (response.ok) {
        // Se o login for bem-sucedido, redirecione o usuário para outra página
        // Aqui você pode redirecionar para a página de perfil, por exemplo
        window.location.href = '/profile';
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Erro desconhecido ao fazer login');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Tente novamente mais tarde.');
    }
  };

  return (
    <ContainerLogin>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input
          type="text"
          placeholder="Email"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
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
        <Button childreen='Entrar' type="submit"></Button>
      </form>
      <div className="Join">
        <Link to="/register" className="register">
          Não possui uma conta ?
        </Link>
      </div>
    </ContainerLogin>
  );
};

export default Login;
