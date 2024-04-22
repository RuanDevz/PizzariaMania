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
        </div>
    );
}

export default Pizza;
