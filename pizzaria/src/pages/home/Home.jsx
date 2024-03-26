// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import { ContainerHome } from './HomeStyle'
import pizzaiolo from '../../assets/pizzaiolo.png'
import Button from '../../components/button/Button'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Home = () => {

  useEffect(() =>{
    axios.get("http://localhost:3000/skills")
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
  },[])
  return (
    <ContainerHome>
        <div>
            <h1>Pizzaria family</h1>
            <img src={pizzaiolo} alt="comidas" />
        </div>
        <div className='infos'>
          <p>as pessoas decepcionam, mas a pizza nunca decepciona</p>
          <Link to='/login'><Button childreen='Peça já o seu'/></Link>
        </div>
    </ContainerHome>
  )
}

export default Home