/* eslint-disable react/no-children-prop */
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { DashboardContainer, Product } from './dashboardStyle';
import Button from '../../components/button/Button';
import Logincontext from '../../context/Logincontext';
import Cart from '../../components/Cart/Cart';
import Header from '../../components/header/Header';
import Loading from '../../components/Loading/Loading';

const Dashboard = () => {
  const { setOrder, Order, username, setIsadmin,isadmin, setCartitems, modalvisible, setModalvisible, cartitems,loading,setLoading } = useContext(Logincontext);

  useEffect(() => {
    setLoading(true)
    axios.get("https://pizzariamania3.onrender.com/order").then((response) => {
      setOrder(response.data);
      setLoading(false)
    });
  }, []);

const addToCart = (item) => {
  const existingItem = cartitems.find(cartItem => cartItem.Product === item.Product);

  if (existingItem) {
    if (existingItem.quantity) {
      setCartitems(prevItems =>
        prevItems.map(cartItem =>
          cartItem.Product === item.Product ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      return;
    }
  } else {

    setCartitems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
  }
  
  if (!modalvisible) {
    setModalvisible(true);
  }
};


  return (
    <div>
        <>
      <Header />
      <DashboardContainer>
        <Cart />
        <h1>Bem vindo a Pizzaria Mania, <span id='name'>{username}</span>!</h1>
        <h1>Mais pedidos</h1>
        <Product>
          {loading ? (
            <Loading/>
          ):(
            <>
             {Order.map((order) => (
            <div className='Product-item' key={order.id}>
              <h1>{order.Product}</h1>
              <p>{order.Description}</p>
              <img src={order.Img} alt={order.id} />
              <p id='price'>Preço: R${order.Price},00</p>
              <Button onClick={() => addToCart(order)} children='Comprar' />
            </div>
          ))}
            </>
          )}
        </Product>
      </DashboardContainer>
        </>
    </div>
  );
};

export default Dashboard;
