import React from 'react'
import { ContainerHome } from './HomeStyle'
import pizzaiolo from '../../assets/pizzaiolo.png'
import Button from '../../components/header/button/Button'


const Home = () => {
  return (
    <ContainerHome>
        <div>
            <h1>Pizzaria family</h1>
            <img src={pizzaiolo} alt="comidas" />
        </div>
        <div className='infos'>
          <p>as pessoas decepcionam, mas a pizza nunca decepciona</p>
          <Button childreen='Peça já o seu'/>
        </div>
    </ContainerHome>
  )
}

export default Home