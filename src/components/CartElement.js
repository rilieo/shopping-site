import React, { useState, useContext } from 'react'
import Decimal from 'decimal.js';
import CostContext from './CostContext';

import './CartElement.css';

export default function CartElement({index, squish}) {
    const context = useContext(CostContext);
    const [numItems, setNumItems] = useState(squish.quantity);

    function handleDecrement() {
        if (numItems >= 1) {

            context.costHandler({price: -squish.item.price});
            context.quantityHandler({index: index, quantity: numItems - 1});

            if (numItems === 1) {
                context.removeItemHandler(index);
            } else {
                setNumItems(numItems - 1);
            }
        }

    }
    
    function handleIncrement() {
        if (numItems < 9) {
            setNumItems(numItems + 1);
            context.costHandler({price: Decimal(squish.item.price)});
            context.quantityHandler({index: index, quantity: numItems + 1});
        }
    }


  return (
    <div key={index} className="cart-items">
        <img className="cart-squish-img" src={squish.item.image} alt={squish.item.name} />
        <div className="cart-squish-name">
            <h2>{squish.item.name}</h2>
        </div>
        <div className="price">
            <button onClick={handleDecrement}>-</button>
            <p>{numItems}</p>
            <button onClick={handleIncrement}>+</button>
        </div>
    </div>
  )
}
