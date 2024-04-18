import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { DashboardContainer, Product } from './dashboardStyle';
import Button from '../../components/button/Button';
import Logincontext from '../../context/Logincontext';
import Cart from '../../components/Cart/Cart';

const Dashboard = () => {
  const { setOrder, Order, username, isadmin, setIsadmin, cartitems, setCartitems } = useContext(Logincontext);

  useEffect(() => {
    axios.get("https://pizzariamania3.onrender.com/order").then((response) => {
      setOrder(response.data);
    });
  }, []);

  useEffect(() => {
    setIsadmin(username === "Ruanb");
  }, [username, setIsadmin]);

  useEffect(() => {
    console.log(cartitems);
  }, [cartitems]);

  const Addtocart = (item) => {
    setCartitems(prevItems => [...prevItems, item]);
  };

  return (
    <div>
      <DashboardContainer>
        <Cart/>
        <h1>Bem vindo a Pizzaria Mania, <span id='name'>{username}</span>!</h1>
        <h1>Mais pedidos</h1>
        <Product>
          {Order.map((order) => (
            <div className='Product-item' key={order.id}>
              <h1>{order.Product}</h1>
              <p>{order.Description}</p>
              <img src={order.Img} alt={order.id} />
              <p id='price'>Preço: R${order.Price},00</p>
              <Button onClick={() => Addtocart(order)} childreen='Comprar' />
            </div>
          ))}
        </Product>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
