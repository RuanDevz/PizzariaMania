import React, { useContext } from 'react';
import pizza from '../../pages/Minhaconta/img/PizzaOrder.png';
import Logincontext from '../../context/Logincontext';
import './PizzaStyle.css';

const Pizza = () => {
    const { getcartitens, cartitems } = useContext(Logincontext);
    const { value, pedidos } = getcartitens;

    const desconto = 20
    const taxa = 2

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
                </div>
                <div className='pedidos'>
                    <h1>Seus pedidos</h1>
                    {pedidos && pedidos.map((pedido) => {
                        const cartItem = cartitems.find(item => item.Product === pedido.Product);
                        const quantity = cartItem ? cartItem.quantity : 0;

                        return (
                            <div className='orders' key={pedido.id}>
                                <p id='product'>{pedido.Product}</p>
                                <div className='price'>
                                    <p>R${pedido.Price},00</p>
                                    <p>x {quantity}</p> 
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='container_details'>
                <div className='details'>
                    <h1>Big Details</h1>
                </div>
                <div>
                    <div className='total'>
                        <p>Total</p>
                        <p>R$ {value},00</p>
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
                <span>R$ {(value - desconto + taxa)},00</span>
            </div>
        </div>
    );
}

export default Pizza;
