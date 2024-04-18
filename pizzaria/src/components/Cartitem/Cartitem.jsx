/* eslint-disable react/no-children-prop */
import React, { useContext, useState, useEffect } from 'react';
import { CartProducts, Orders, Finish } from './CartitemStyle';
import Logincontext from '../../context/Logincontext';
import { IoClose } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import Button from '../../components/button/Button';
import { FaMinus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const Cartitem = () => {
  const { cartitems, setCartitems, setModalvisible, count, setCount } = useContext(Logincontext);
  const [totalPrice, setTotalPrice] = useState(0);

  const removeItem = (itemToRemove) => {
    setCartitems(prevItems => prevItems.filter(item => item !== itemToRemove));
  };

  const closeModal = () => {
    setModalvisible(false);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      let sum = 0;
      cartitems.forEach(item => {
        sum += item.Price;
      });
      return sum;
    };

    setTotalPrice(calculateTotalPrice());
  }, [cartitems, incrementCount ]);

  return (
    <CartProducts>
      <div className='mycart'>
        <h1>Meu carrinho</h1>
        <IoClose onClick={closeModal} id='xmark' />
      </div>
      {cartitems.map((item, index) => (
        <Orders key={index}>
          <div>
            <img src={item.Img} alt="" />
          </div>
          <div className='titleandprice'>
            <h1>{item.Product}</h1>
            <p>R$ {item.Price}</p>
          </div>
          <div className='numitens'>
            <FaMinus id='minus' onClick={decrementCount}/>
            <p>{count}</p>
            <IoMdAdd id='max' onClick={incrementCount} />
          </div>
          <div className='removeiten'>
            <FaTrash id='trash' onClick={() => removeItem(item)} />
          </div>
        </Orders>
      ))}
      <Finish>
        <div>
          <h2>Preço total: R${totalPrice}</h2>
        </div>
        <div className='finishBuy'>
          <Button children='Finalizar compra'/>
        </div>
      </Finish>
    </CartProducts>
  );
};

export default Cartitem;
