import React from 'react'
import {Container,Options,Order,ContainerGeral} from './MinhacontaStyle'
import minhaconta from './img/Users.png'
import delivery from './img/Location.png'
import pagamento from './img/Payment.png'
import Pizza from '../../components/Pizza/Pizza'

const Minhaconta = () => {
  return (
    <>
    <ContainerGeral>
      <Container>
        <Options>
            <h1>Minha conta</h1>
            <img src={minhaconta} alt="Minhaconta" />
        </Options>
        <Options>
            <h1>Endereço de entrega</h1>
            <img src={delivery} alt="delivery" />
        </Options>
        <Options>
            <h1>Pagamento</h1>
            <img src={pagamento} alt="pagamento" />
        </Options>
      </Container>
      <Order>
        <div className='containertitle'>
            <Pizza/>
        </div>
      </Order>
      </ContainerGeral>
    </>
  )
}

export default Minhaconta
