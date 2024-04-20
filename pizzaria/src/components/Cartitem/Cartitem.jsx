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
  const { cartitems, setCartitems, setModalvisible, modalvisible } = useContext(Logincontext);
  const [totalPrice, setTotalPrice] = useState(0);

  const removeItem = (itemToRemove) => {
    setCartitems(prevItems => prevItems.filter(item => item !== itemToRemove));
  };

  const closeModal = () => {
    setModalvisible(false);
  };

  const addToCart = (item) => {
    const existingItem = cartitems.find(cartItem => cartItem.Product === item.Product);

    if (existingItem) {
      setCartitems(prevItems =>
        prevItems.map(cartItem =>
          cartItem.Product === item.Product ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartitems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
    }

    if (!modalvisible) {
      setModalvisible(true);
    }
  };



  useEffect(() => {
    const calculateTotalPrice = () => {
      return cartitems.reduce((sum, item) => sum + item.Price * item.quantity, 0);
    };
    setTotalPrice(calculateTotalPrice());
  }, [cartitems]);

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
<<<<<<< HEAD
            <p>{item.Price}</p>
            <p></p>
=======
            <p>R$ {item.Price}</p>
>>>>>>> novo-ramo
          </div>
          <div className='numitens'>
            <FaMinus id='minus' onClick={() => setCartitems(prevItems =>
              prevItems.map(cartItem =>
                cartItem.Product === item.Product && cartItem.quantity > 1
                  ? { ...cartItem, quantity: cartItem.quantity - 1 }
                  : cartItem
              )
            )}/>
            <p>{item.quantity}</p>
            <IoMdAdd id='max' onClick={() => addToCart(item)} />
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
