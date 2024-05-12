import React, { useState, useContext } from 'react'
import CostContext from './CostContext';

import './CartElement.css';

export default function CartElement({index, item}) {
    const context = useContext(CostContext);
    const [numItems, setNumItems] = useState(item.quantity);

    function handleDecrement() {
        if (numItems > 1) {
            setNumItems(numItems - 1);
            context.costHandler({price: -item.item.price});
            context.quantityHandler({index: index, quantity: numItems - 1});
        } else if (numItems === 1) {
            context.costHandler({price: -item.item.price});
            context.quantityHandler({index: index, quantity: numItems - 1});
            context.removeItemHandler(index);
        }
    }
    
    function handleIncrement() {
        if (numItems < 9) {
            setNumItems(numItems + 1);
            context.costHandler({price: item.item.price});
            context.quantityHandler({index: index, quantity: numItems + 1});
        }
    }


  return (
    <div key={index} className="cart-items">
        <img src={item.item.image} alt={item.item.name} />
        <h2>{item.item.name}</h2>
        <div className="price">
            <button onClick={handleDecrement}>-</button>
            <p>{numItems}</p>
            <button onClick={handleIncrement}>+</button>
        </div>
    </div>
  )
}
