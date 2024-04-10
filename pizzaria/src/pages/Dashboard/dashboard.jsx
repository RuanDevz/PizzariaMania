import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { DashboardContainer, Product } from './dashboardStyle';
import Button from '../../components/button/Button';
import Logincontext from '../../context/Logincontext';
import Cart from '../../components/Cart/Cart';

const Dashboard = () => {
  const { setOrder, Order, username, isadmin, setIsadmin } = useContext(Logincontext);

  useEffect(() => {
    axios.get("http://localhost:3001/order").then((response) => {
      setOrder(response.data);
    });
  }, []);

  useEffect(() => {
    setIsadmin(username === "Ruanb");
  }, [username, setIsadmin]);

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
              <Button childreen='Comprar' />
            </div>
          ))}
        </Product>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
