import React, { useContext } from 'react'
import {CartProducts,Orders} from './CartitemStyle'
import img from '../../assets/logo.png'
import Logincontext from '../../context/Logincontext'

const Cartitem = () => {

const {Order} = useContext(Logincontext)
  return (
    <CartProducts>
        <h1>Seu carrinho</h1>
        <Orders>
            {Order.map((orders) =>{
                <div key={orders.id}>
                    <h1>{orders.Product}</h1>
                    <p>{orders.Description}</p>
                    <img src={orders.Img} alt="" />
                    <p>Preço: {orders.Price}</p>
                </div>
            })}
        </Orders>
    </CartProducts>
  )
}

export default Cartitem