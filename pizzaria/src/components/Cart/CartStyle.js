import styled, { keyframes } from 'styled-components';

// Definindo a animação
const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Estilizando a div com a animação
export const Cartt = styled.div`
  width: 100%;
  max-width: 330px;
  background-color: #fff;
  position: fixed;
  height: 100vh;
  padding: 100px 20px 20px;
  top: 0;
  right: 0;
  animation: ${slideIn} 0.5s ease forwards;
  border: 1px solid #fafafa;
`;
