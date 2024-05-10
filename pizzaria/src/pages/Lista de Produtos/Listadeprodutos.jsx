import React, { useEffect, useState, useContext } from 'react';
import { ContainerProdutos, Products } from './ListadeprodutosStyle';
import axios from 'axios';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom'; 
import Loading from '../../components/Loading/Loading';
import { MdModeEdit } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import Logincontext from '../../context/Logincontext';

const Listadeprodutos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  const {nomeProduto, setGetproduct,
    descricaoProduto, setGetdescription,
    urlImagem, setGeturl,
    precoProduto, setGetprice,setGetid,getid} = useContext(Logincontext)

  useEffect(() => {
    setLoading(true);
    axios.get("https://pizzariamania3.onrender.com/order")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar os produtos:', error);
      });
  }, []);

  const handleRemove = (productId) => {
     
     axios.delete(`https://pizzariamania3.onrender.com/order/${productId}`)
     .then(() => {
      window.location.reload()
      })
     .catch((error) => {
        console.error('Erro ao remover o produto:', error);
      });
  };

  const handleEdit = async (productId) => {
    const dadosAtualizados = {
      nomeProduto,
      descricaoProduto,
      urlImagem,
      precoProduto
    };
  
      const response = await axios.get(`https://pizzariamania3.onrender.com/order/${productId}`, dadosAtualizados);

      setGetproduct(response.data.existingProduct.Product)
      setGetdescription(response.data.existingProduct.Description)
      setGeturl(response.data.existingProduct.Img)
      setGetprice(response.data.existingProduct.Price)
      setGetid(response.data.existingProduct.id)
      navigate('/admin/editar')
  };



  return (
    <ContainerProdutos>
      <IoMdArrowRoundBack id='back' onClick={() => navigate('/admin')} />
      <h1>Lista de Produtos</h1>
      <div className='containerdivproduct'>
        <Products>
          {loading ? (
            <Loading />
          ) : (
            products.map((product) => (
              <div className='containerproduct' key={product.id}>
                <div className='edit'>
                  <FaRegTrashAlt onClick={() => handleRemove(product.id)} id='remove' />
                  <MdModeEdit onClick={() => handleEdit(product.id)} id='edit' />
                </div>
                <h2>{product.Product}</h2>
                <img src={product.Img} alt={product.Product} />
                <p>Preço: R${product.Price}</p>
                <p>ID Product: #{product.id}</p>
              </div>
            ))
          )}
        </Products>
      </div>
    </ContainerProdutos>
  );
};

export default Listadeprodutos;
