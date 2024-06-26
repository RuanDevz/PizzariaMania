/* eslint-disable react/no-children-prop */
import React, { useState, useEffect } from 'react';
import { ContainerRemover, ContainerInput } from './RemoverStyle';
import Button from '../../components/button/Button';
import axios from 'axios';
import Correto from '../../assets/Correto.png';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";


const Remover = () => {
  const [id, setId] = useState('');
  const [existingProduct, setExistingProduct] = useState(null);
  const [modalremove, setModalremove] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();


  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const closeModalAndRedirect = () => {
    setModalremove(false);
    setShowSuccessMessage(true);
    setTimeout(() => {
      navigate('/admin/remover');
    }, 3000);
  };

  const HandleRemove = () => {
    axios.get(`https://pizzariamania3.onrender.com/order/${id}`)
      .then((response) => {
        const data = response.data;
        if (data && data.existingProduct) {
          setExistingProduct(data.existingProduct);
          setModalremove(true);
        } else if (data && data.error) {
          setError(data.error);
        } else {
          setError('Erro ao obter produto');
        }
      })
      .catch((error) => {
        setError('Erro ao obter produto: ' + error.message);
      });
  };

  const Not = () => {
    navigate('/admin/remover');
    setModalremove(false);
  };

  const Yes = () => {
    axios.delete(`https://pizzariamania3.onrender.com/order/${id}`)
      .then((response) => {
        setSuccessMessage(response.data.message);
        closeModalAndRedirect();
      });
  };

  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    }
  }, [showSuccessMessage]);

  return (
    <ContainerRemover>
      {modalremove ? (
        <div>
          <h1>Tem certeza que deseja remover este produto ?</h1>
          {existingProduct && (
            <div className='confirmremoveproduct'>
              <h1>{existingProduct.Product}</h1>
              <p>{existingProduct.Description}</p>
              <img src={existingProduct.Img} alt={existingProduct.Product} />
              <p>Preço: R${existingProduct.Price}</p>
              <div className='confirmbutton'>
                <Button onClick={Yes} children='Sim' />
                <Button onClick={Not} children='Não' />
              </div>
            </div>
          )}
          {showSuccessMessage && (
            <div>
              <h1>Pedido removido com sucesso</h1>
              <img src={Correto} alt="Correto" />
            </div>
          )}
        </div>
      ) : (
        <div>
          <IoMdArrowRoundBack id='back' onClick={() => navigate('/admin')} />
          <h1>Remover</h1>
          <ContainerInput>
            <div className="input-container">
              <input
                onChange={(e) => setId(e.target.value)}
                value={id}
                type="number"
                name="text"
                className="input"
                placeholder="ID do produto"
              />
              <div className="highlight"></div>
            </div>
            {error && <p>{error}</p>}
            <Button children='Remover Pedido' onClick={HandleRemove}></Button>
          </ContainerInput>
        </div>
      )}
    </ContainerRemover>
  );
};

export default Remover;