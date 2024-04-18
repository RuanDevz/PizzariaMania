import React, { useContext, useState } from 'react'
import {Cartt} from './CartStyle'
import Cartitem from '../Cartitem/Cartitem'
import Logincontext from '../../context/Logincontext'

const Cart = () => {
  const {modalvisible} = useContext(Logincontext)
  return (
    <div>
      {modalvisible ? (
          <Cartt>
            <Cartitem/>
          </Cartt>
      ):(
        null
      )}
    </div>
  )
}

export default Cart