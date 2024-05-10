/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import { RegisterContainer, SucessMessage, Containerinputs } from './RegisterStyle.js';
import Input from '../../components/Inputs/Input.jsx';
import Button from '../../components/button/Button.jsx';
import Correto from '../../assets/Correto.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoMdArrowRoundBack } from "react-icons/io";
import pizzaiolo from '../../assets/pizzaiolo.png'

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isRegistered) {
      const timeout = setTimeout(() => {
        setIsRegistered(false);
        navigate('/login');
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isRegistered, navigate]);

  const handleClick = () => {
    let isValid = true;

    if (username.length < 4) {
      setError('Seu nome precisa ter pelo menos 4 caracteres');
      isValid = false;
      return;
    }

    if (password.length <= 8) {
      setError('Sua senha precisa ter mais de 8 caracteres');
      isValid = false;
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      isValid = false;
      return;
    }

    if (!isValid) {
      return;
    }

    setIsButtonDisabled(true);

    axios
      .post('https://backendpizzaria.onrender.com/user/register', {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.error) {
          setError(response.data.error);
          setIsButtonDisabled(false);
          return;
        }
        setIsRegistered(true);
      })
      .catch((error) => {
        console.error('Erro ao cadastrar usuário:', error);
        setIsButtonDisabled(false); 
      });
  };

  return (
    <RegisterContainer>
      <IoMdArrowRoundBack id='back' onClick={() => navigate('/')} />
      {isRegistered ? (
        <SucessMessage id='success'>
          <h2>Usuário Cadastrado com Sucesso</h2>
          <img src={Correto} alt='Correto' />
        </SucessMessage>
      ) : (
        <form>
          
          <Containerinputs>
          <h1>Cadastrar usuário</h1>
            <Input
              type='text'
              placeholder='Nome'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              htmlFor='username'
              id='username'
            />

            <Input
              type='password'
              placeholder='Sua senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              htmlFor='password'
              id='password'
            />

            <Input
              type='password'
              placeholder='Confirmar senha'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              htmlFor='confirmPassword'
              id='confirmPassword'
            />
                  {!isRegistered && (
        <Button children='Cadastrar' onClick={handleClick} disabled={isButtonDisabled} />
      )}
          </Containerinputs>
          {error && <p id='error'>{error}</p>}
          <section className='pizzailo'>
        <img src={pizzaiolo} alt="pizzaiolo" />
      </section>
        </form>
      )}
    </RegisterContainer>
  );
};

export default Register;
