/* eslint-disable react/no-children-prop */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { ContainerHome,TitleHomepage } from './HomeStyle'
import pizzaiolo from '../../assets/pizzaiolo.png'
import Button from '../../components/button/Button'
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <TitleHomepage>Pizzaria Mania</TitleHomepage>
    <ContainerHome>
        <div>
            <img src={pizzaiolo} alt="comidas" />
        </div>
        <div className='infos'>
          <p>as pessoas decepcionam, mas a pizza nunca decepciona</p>
          <Link to='/login'><Button className='button' children='Peça já o seu'/></Link>
        </div>
    </ContainerHome>
        </div>
  )
}

export default Home