import React, { useContext, useEffect, useState } from 'react';
import {DashboardContainer,Containerconfig} from './dashboardStyle'
import axios from 'axios'
import Button from '../../components/button/Button'
import Logincontext from '../../context/Logincontext';
import {Link} from 'react-router-dom'

const Dashboard = () => {
  const {setOrder, Order} = useContext(Logincontext)
  const {username} = useContext(Logincontext)
  const {isadmin, setIsadmin} = useContext(Logincontext)

  if(username === "Ruanb"){
    setIsadmin(true)
  } else{
    setIsadmin(false)
  }

  useEffect(() => {
    axios.get("http://localhost:3001/order").then((response) =>{
      setOrder(response.data)
    })
  },[])

  return (
    <div>
      {isadmin ? (
        <div>
      <DashboardContainer>
      <h1>Bem vindo a Pizzaria Mania, <span id='name'>{username}</span>!</h1>
      <h1>Mais pedidos</h1>
      {Order.map((orders) =>{
        return(
          <div className='Product' key={orders.id}>
            <h1>{orders.Product}</h1>
            <p>{orders.Description}</p>
            <img src={orders.Img} alt={orders.id} />
            <p id='price'>Preço: R${orders.Price},00</p>
            <Button childreen='Comprar' />
          </div>
        )
      })}
    </DashboardContainer>
        </div>
      ):(
        <div>
      <DashboardContainer>
      <h1>Bem vindo a Pizzaria Mania, <span id='name'>{username}</span>!</h1>
      <h1>Mais pedidos</h1>
      {Order.map((orders) =>{
        return(
          <div className='Product' key={orders.id}>
            <h1>{orders.Product}</h1>
            <p>{orders.Description}</p>
            <img src={orders.Img} alt={orders.id} />
            <p id='price'>Preço: R${orders.Price},00</p>
            <Button childreen='Comprar' />
          </div>
        )
      })}
    </DashboardContainer>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
