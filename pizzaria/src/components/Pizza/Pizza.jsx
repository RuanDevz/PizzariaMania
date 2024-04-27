import React, { useContext } from 'react';
import pizza from '../../pages/Minhaconta/img/PizzaOrder.png';
import { FaMinus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import Logincontext from '../../context/Logincontext';
import './PizzaStyle.css'

const Pizza = () => {
    const { count } = useContext(Logincontext);
    return (
        <div>
            <div className='containertitle'>
            <img src={pizza} alt="pizza" />
            <div className='titles'>
                <h1>Wow! Pizza</h1>
                <p>Entregamos nessa localidade</p>
            </div>
            </div>
            <div className='containerdown'>
                <div>
                    <p id='orange'>Aplique seu código do cupom <span># xxxx-xxxx</span></p>
                    <div className='countpizza'>
                    <p id='orange'>Cheese Pizza</p>
                        <div className='contador'>
                        <FaMinus id='add' />
                        {count}
                        <IoMdAdd id='minus' />
                        </div>
                        <div className='descountprices'>
                            <p>R$ <strike>200</strike></p>
                            <p>R$ 180</p> 
                        </div>
                    </div>
                    <div className='msglove'>
                        <p>"Alguma mensagem para o seu amor ?"</p>
                    </div>
                </div>
            </div>
            <div className='container_details'>
            <div className='details'>
                <h1>Big Details</h1>
            </div>
            <div>
                <div className='total'>
                    <p>Total</p>
                    <p>R$ 180,00</p>
                </div>
                <div className='details-delivery'>
                    <p>Taxa de entrega</p>
                    <div className='details-delivery-promo'>
                        <strike>R$ 19,00</strike>
                        <p id='green'>GRÁTIS</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='desconto'>
                <p>Desconto</p>
                <span id='green'>-R$ 20,00</span>
            </div>
            <div className='taxas'>
                <p>Taxas de mudanças</p>
                <span>R$ 2,00</span>
            </div>
            <div className='pay'>
                <p>A pagar</p>
                <span>R$ 182,00</span>
            </div>
        </div>
    );
}

export default Pizza;
