import React, { useState, useEffect, useContext } from 'react';
import { Container, Options, Order, ContainerGeral } from './MinhacontaStyle';
import minhaconta from './img/Users.png';
import delivery from './img/Location.png';
import pagamento from './img/Payment.png';
import Pizza from '../../components/Pizza/Pizza';
import Logincontext from '../../context/Logincontext';

const Minhaconta = () => {
  const [zoomLevel] = useState(80);



  useEffect(() => {
    const setZoom = () => {
      document.body.style.zoom = `${zoomLevel}%`;
    };

    setZoom();

    return () => {
      document.body.style.zoom = '100%';
    };
  }, [zoomLevel]);

  return (
    <>
      <ContainerGeral>
        <Order>
          <div className='containertitle'>
            <Pizza />
          </div>
        </Order>
      </ContainerGeral>
    </>
  );
};

export default Minhaconta;
