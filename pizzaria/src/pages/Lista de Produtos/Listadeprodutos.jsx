import React, { useContext, useEffect, useState } from 'react';
import { ContainerProdutos, Products } from './ListadeprodutosStyle';
import axios from 'axios';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'; 

const Listadeprodutos = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://pizzariamania3.onrender.com/order")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Erro ao carregar os produtos:', error);
      });
  }, []);

  return (
    <ContainerProdutos>
      <IoMdArrowRoundBack id='back' onClick={() => navigate('/admin')} />
      <h1>Lista de Produtos</h1>
      <div className='containerdivproduct'>
        <Products>
          {products.map((product) => {
            return (
              <div className='containerproduct' key={product.id}>
                <h2>{product.Product}</h2>
                <img src={product.Img} alt={product.Product} />
                <p>Preço: R${product.Price}</p>
                <p>ID Product: #{product.id}</p>
              </div>
            );
          })}
        </Products>
      </div>
    </ContainerProdutos>
  );
};

export default Listadeprodutos;
