import React, { useEffect, useState } from 'react';
import { ContainerCreate,Sucesscreateorder,Containerdiv } from './CreateStyle';
import Button from '../../components/button/Button';
import axios from 'axios';
import Correto from '../../assets/Correto.png'
import {useNavigate} from 'react-router-dom'

const Create = () => {
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(null);
  const [ordercreated, setOrdercreated] = useState(false);
  const [successmessage, setSuccessmessage] = useState('');
  const navigate = useNavigate()

  const handleAddProduct = () => {
    if (!product || !description || !img || price === 0) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    axios.post('http://localhost:3001/order', {
      Product: product,
      Description: description,
      Img: img,
      Price: price,
    }).then((resp) => {
      console.log(resp.data);

      const { message } = resp.data;

      setProduct('');
      setDescription('');
      setImg('');
      setPrice(0);
      setError(null);

      setOrdercreated(true);
      setSuccessmessage(message || '');
    }).catch((error) => {
      console.error('Error adding product:', error);
      setError('Ocorreu um erro ao adicionar o produto. Por favor, tente novamente.');
    });
  };

  useEffect(() => {
    if (ordercreated) {
      const timer = setTimeout(() => {
        navigate('/admin');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [ordercreated, navigate]);

  return (
    <ContainerCreate>
      {ordercreated ? (        
        <Sucesscreateorder>
          <h1>{successmessage}</h1>
          <img src={Correto} alt="Correto"/>
        </Sucesscreateorder>
      ): (
      <div>
      <h1>Criar novo produto</h1>
      <Containerdiv>
        <div className="input-container">
          <input onChange={(e) => setProduct(e.target.value)} value={product} type="text" name="text" className="input" placeholder="Nome do Produto" />
          <div className="highlight"></div>
        </div>
        <div>
          <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" name="text" className="input" placeholder="Descrição do produto" />
          <div className="highlight"></div>
        </div>
        <div>
          <input onChange={(e) => setImg(e.target.value)} value={img} type="text" name="text" className="input" placeholder="URL da imagem do produto" />
          <div className="highlight"></div>
        </div>
        <div>
          <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" name="number" className="input" placeholder="Preço do produto" />
          <div className="highlight"></div>
        </div>
        {error && <div id="error">{error}</div>}
        <Button onClick={handleAddProduct} childreen='Cadastrar produto' />
        </Containerdiv>
        </div>
      )}
    </ContainerCreate>
  );
};

export default Create;
