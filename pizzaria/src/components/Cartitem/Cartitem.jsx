import React, { useContext } from 'react';
import { CartProducts, Orders } from './CartitemStyle';
import Logincontext from '../../context/Logincontext';
import { IoClose } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import Button from '../../components/button/Button';

const Cartitem = () => {
  const { cartitems, setCartitems } = useContext(Logincontext);

  const removeItem = (itemToRemove) => {
    setCartitems(prevItems => prevItems.filter(item => item !== itemToRemove));
  };

  return (
    <CartProducts>
      <div className='mycart'>
        <h1>Meu carrinho</h1>
        <IoClose id='xmark' />
      </div>
      {cartitems.map((item, index) => (
        <Orders key={index}>
          <div>
            <img src={item.Img} alt="" />
          </div>
          <div className='titleandprice'>
            <h1>{item.Product}</h1>
            <p>{item.Price}</p>
          </div>
          <div className='numitens'>
            <input type="text" />
          </div>
          <div className='removeiten'>
            <FaTrash id='trash' onClick={() => removeItem(item)} />
          </div>
          <div className='finisbuy'>
            <Button childreen='Finalizar compra'/>
          </div>
        </Orders>
      ))}
    </CartProducts>
  );
};

export default Cartitem;
