import React, { useContext, useEffect } from 'react';
import CostContext from './CostContext';
import CartElement from './CartElement';

import './Cart.css'; // Import the CSS

export default function Cart({ isOpen, squishes, toggle }) {
    const context = useContext(CostContext);
    const cartClass = isOpen ? 'cart-open' : 'cart-closed';

    return (
        <div className={`cart ${cartClass}`}>
            <div className="another-header">
                <p>${context.cost.toString()}</p>
                <button className="close" onClick={toggle}>x</button>
            </div>
            {squishes.map((squish, index) => (
                <CartElement key={index} index={index} squish={squish} />
            ))}

        </div>
    );
}