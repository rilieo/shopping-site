import React, { useContext, useEffect } from 'react';
import CostContext from './CostContext';
import CartElement from './CartElement';

import './Cart.css'; // Import the CSS

export default function Cart({ isOpen, items, toggle }) {
    const context = useContext(CostContext);
    const cartClass = isOpen ? 'cart-open' : 'cart-closed';

    return (
        <div className={`cart ${cartClass}`}>
            <div className="another-header">
                <p>${context.cost}</p>
                <button className="close" onClick={toggle}>x</button>
            </div>
            {items.map((item, index) => (
                <CartElement key={index} index={index} item={item} />
            ))}

        </div>
    );
}