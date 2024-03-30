import React, { useEffect, useState } from 'react';
import {DashboardContainer} from './dashboardStyle'
import axios from 'axios'
import Button from '../../components/button/Button'

const Dashboard = () => {
  const [username, setUsername] = useState('Ruan');
  const [Order, setOrder] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/order").then((response) =>{
      setOrder(response.data)
    })
  },[])

  return (
    <DashboardContainer>
      <h1>Bem vindo a Pizzaria Mania, {username}!</h1>
      <h1>Mais pedidos</h1>
      {Order.map((orders) =>{
        return(
          <div className='Product' key={orders.id}>
            <h1>{orders.Product}</h1>
            <p>{orders.Description}</p>
            <img src={orders.Img} alt={orders.id} />
            <p id='price'>Preço: R$:{orders.Price},00</p>
            <Button childreen='Comprar' />
          </div>
        )
      })}
    </DashboardContainer>
  );
};

export default Dashboard;
