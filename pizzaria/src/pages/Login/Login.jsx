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
  const { setError, error, username, setUsername, password, setPassword } = useContext(Logincontext);
  const [loading, setLoading] = useState(false); // Fix: Change to const [loading, setLoading] = useState(false)

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state before making the request

    if (username.trim() === '' || password.trim() === '') {
      setError('Preencha os campos corretamente');
      setLoading(false); // Reset loading state
      return;
    }

    try {
      const response = await axios.post('https://pizzariamania3.onrender.com/user/login', {
        Username: username,
        Password: password,
      });

      sessionStorage.setItem('accessToken', response.data);

      const errormsg = response.data.error;

      if (errormsg) {
        setError(errormsg);
      } else {
        setError('');
        navigate('/dashboard');
      }
    } catch (error) {
      setError('Falha ao logar, por favor, verifique suas credenciais');
      console.error('Login error:', error);
    } finally {
      setLoading(false); // Reset loading state regardless of success or failure
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
          <Button className="Entrar" childreen="Entrar" type="submit" />
          <div className="Join">
            <Link to="/register" className="register">
              Não possui uma conta?
            </Link>
          </div>
        </form>
      )}
      {loading ? (
        <span></span>
      ):(
        <div>
        <img id="pizzaiolo" src={Pizzaiolo} alt="" />
      </div>
      )}
    </ContainerLogin>
  );
};

export default Login;
