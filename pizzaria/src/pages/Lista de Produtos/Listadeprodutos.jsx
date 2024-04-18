import React, { useContext, useEffect, useState } from 'react'
import {ContainerProdutos,Products} from './ListadeprodutosStyle'
import axios from 'axios'
import Logincontext from '../../context/Logincontext'


const Listadeprodutos = () => {

const [products, setProducts] = useState([])

const {loading, setLoading} = useContext(Logincontext)

useEffect(() => {
  axios.get("https://pizzariamania3.onrender.com/order").then((response)=>{
    setProducts(response.data)
  })
},[])

  return (
    <ContainerProdutos>
        <h1>Lista de Produtos</h1>
        <Products>
          {products.map((product) =>{
            return(
              <div className='containerproduct' key={product.id}>
                <h2>{product.Product}</h2>
                <img src={product.Img} alt={product.Product} />
                <p>Preço: R${product.Price}</p>
                <p>ID Product: #{product.id}</p>
              </div>
            )
          })}
        </Products>
    </ContainerProdutos>
  )
}

export default Listadeprodutos