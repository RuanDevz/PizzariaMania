import React, { useState } from 'react';
import { ContainerEditar, Inputsedit } from './EditarStyle';
import Button from '../../components/button/Button';
import axios from 'axios'; 

const Editar = () => {
  const [id, setId] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [urlImagem, setUrlImagem] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dadosAtualizados = {
      nomeProduto,
      descricaoProduto,
      urlImagem,
      precoProduto
    };

    try {
      const response = await axios.put(`http://localhost:3001/order/${id}`, dadosAtualizados);
      console.log(response.data)
      console.log(dadosAtualizados);
    } catch (error) {
      console.error('Erro ao editar pedido:', error);
    }
  };

  return (
    <ContainerEditar>
      <h1>Editar Pedidos</h1>
      <form onSubmit={handleSubmit}>
        <Inputsedit>
          <div className="input-container">
            <input
              onChange={(e) => setId(e.target.value)}
              value={id}
              type="text"
              name="text"
              className="input"
              placeholder="ID do produto a atualizar"
            />
            <div className="highlight"></div>
          </div>
          <div className="input-container">
            <input
              onChange={(e) => setNomeProduto(e.target.value)}
              value={nomeProduto}
              type="text"
              name="text"
              className="input"
              placeholder="Nome do produto"
            />
            <div className="highlight"></div>
          </div>
          <div className="input-container">
            <input
              onChange={(e) => setDescricaoProduto(e.target.value)}
              value={descricaoProduto}
              type="text"
              name="text"
              className="input"
              placeholder="Descrição do produto"
            />
            <div className="highlight"></div>
          </div>
          <div className="input-container">
            <input
              onChange={(e) => setUrlImagem(e.target.value)}
              value={urlImagem}
              type="text"
              name="text"
              className="input"
              placeholder="Url da imagem do produto"
            />
            <div className="highlight"></div>
          </div>
          <div className="input-container">
            <input
              onChange={(e) => setPrecoProduto(e.target.value)}
              value={precoProduto}
              type="text"
              name="text"
              className="input"
              placeholder="Preço do produto"
            />
            <div className="highlight"></div>
            <div className='button'>
            <Button childreen='Atualizar Pedido' type="submit" />
            </div>
          </div>
        </Inputsedit>
      </form>
    </ContainerEditar>
  );
};

export default Editar;
