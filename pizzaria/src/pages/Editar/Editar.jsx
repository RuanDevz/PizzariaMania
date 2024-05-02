import React, { useContext, useEffect, useState } from 'react';
import { ContainerEditar, Inputsedit, Successupdatedorder } from './EditarStyle';
import Button from '../../components/button/Button';
import axios from 'axios'; 
import Correto from '../../assets/Correto.png';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import Logincontext from '../../context/Logincontext';

const Editar = () => {
  const [updated, setUpdated] = useState(false);
  const [error, setError] = useState(false);

  const {
    getProduct, getdescription, geturl, getprice
  } = useContext(Logincontext);

  const [localNomeProduto, setLocalNomeProduto] = useState(getProduct);
  const [localDescricaoProduto, setLocalDescricaoProduto] = useState(getdescription);
  const [localUrlImagem, setLocalUrlImagem] = useState(geturl);
  const [localPrecoProduto, setLocalPrecoProduto] = useState(getprice);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dadosAtualizados = {
      Product: localNomeProduto,
      Description: localDescricaoProduto,
      Img: localUrlImagem,
      Price: localPrecoProduto
    };
    setUpdated(true);

      const response = await axios.put(`https://pizzariamania3.onrender.com/order/${id}`, dadosAtualizados);
      console.log(response.data);
      console.log(dadosAtualizados);
  };

  useEffect(() => {
    if (updated) {
      const timer = setTimeout(() => {
        navigate('/admin');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [updated, navigate]);

  return (
    <ContainerEditar>
      <IoMdArrowRoundBack id='back' onClick={() => navigate('/admin')} />

      <h1>Editar Pedidos</h1>
      <p></p>
      <form>
        <Inputsedit>
          {updated ? (
            <Successupdatedorder>
              <h1>Pedido atualizado com Sucesso!</h1>
              <img src={Correto} alt="Correto" />
            </Successupdatedorder>
          ) : (
            <div>
              <div>
                <div className="input-container">
                  <div className="highlight"></div>
                </div>
                <div className="input-container">
                  <input
                    onChange={(e) => setLocalNomeProduto(e.target.value)}
                    value={localNomeProduto}
                    type="text"
                    name="text"
                    className="input"
                    placeholder="Nome do produto"
                  />
                  <div className="highlight"></div>
                </div>
                <div className="input-container">
                  <input
                    onChange={(e) => setLocalDescricaoProduto(e.target.value)}
                    value={localDescricaoProduto}
                    type="text"
                    name="text"
                    className="input"
                    placeholder="Descrição do produto"
                  />
                  <div className="highlight"></div>
                </div>
                <div className="input-container">
                  <input
                    onChange={(e) => setLocalUrlImagem(e.target.value)}
                    value={localUrlImagem}
                    type="text"
                    name="text"
                    className="input"
                    placeholder="URL da imagem"
                  />
                  <div className="highlight"></div>
                </div>
                <div className="input-container">
                  <input
                    onChange={(e) => setLocalPrecoProduto(e.target.value)}
                    value={localPrecoProduto}
                    type="text"
                    name="text"
                    className="input"
                    placeholder="Preço do produto"
                  />
                  <div className="highlight"></div>
                  {error && <p id='error'>{error}</p>}
                  <div className='button'>
                    <Button onClick={handleSubmit} children='Atualizar Pedido' type="button" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </Inputsedit>
      </form>
    </ContainerEditar>
  );
};

export default Editar;
