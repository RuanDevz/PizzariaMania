// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { ContainerLogin } from './LoginStyle';
import Input from '../../components/Inputs/Input';
import Button from '../../components/button/Button';
import {Link} from 'react-router-dom'

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ContainerLogin>
      <h1>Login</h1>
      <form action="">
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
      </form>
      <div className='Join'>
         <Button childreen='Entrar' />
         <Link to='/register' className='register'>Não possui uma conta ?</Link>
      </div>
    </ContainerLogin>
  );
};

export default Login;
