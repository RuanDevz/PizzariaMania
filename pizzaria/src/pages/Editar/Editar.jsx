import React, { useEffect, useState } from 'react';
import { ContainerEditar, Inputsedit,Successupdatedorder } from './EditarStyle';
import Button from '../../components/button/Button';
import axios from 'axios'; 
import Correto from '../../assets/Correto.png';
import { useNavigate } from 'react-router-dom';

const Editar = () => {
  const [id, setId] = useState('');
  const [nomeProduto, setNomeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [urlImagem, setUrlImagem] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');
  const [updated, setUpdated] = useState(false)
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dadosAtualizados = {
      nomeProduto,
      descricaoProduto,
      urlImagem,
      precoProduto
    };
    if(nomeProduto.length === 0, descricaoProduto.length === 0 || urlImagem.length === 0 || urlImagem.length === 0 || precoProduto.length === 0){
      setError("Preencha todos os campos")
      return
    }
    setUpdated(true)

    try {
      const response = await axios.put(`https://pizzariamania3.onrender.com//order/${id}`, dadosAtualizados);
      console.log(response.data)
      console.log(dadosAtualizados);
    } catch (error) {
      console.error('Erro ao editar pedido:', error);
    }
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
      <h1>Editar Pedidos</h1>
      <form>
        <Inputsedit>
        {updated ?(
          <Successupdatedorder>
            <h1>Pedido atualizado com Sucesso!</h1>
            <img src={Correto} alt="Correto" />
          </Successupdatedorder>
        ):(
          <div>
             <div>
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
                  placeholder="URL da imagem"
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
                {error && <p id='error'>{error}</p>}
                <div className='button'>
                  <Button onClick={handleSubmit} childreen='Atualizar Pedido' type="button" />
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