import React, { useState, useEffect, useContext } from 'react'
import CostContext from './CostContext'

import './Modal.css'

export default function Modal({ selectedItem, isOpen, isClosed }) {
    const context = useContext(CostContext);
    const [numItems, setNumItems] = useState(1);

    function handleDecrement() {
        if (numItems > 1) {
            setNumItems(numItems - 1);
        } else {
            setNumItems(1);
        }
    }

    function handleIncrement() {
        if (numItems < 9) {
            setNumItems(numItems + 1);
        } else {
            setNumItems(9);
        }
    }

    function handleAdd() {
        context.costHandler({price: selectedItem.price * numItems});
        context.itemHandler({item: selectedItem, quantity: numItems });
        isClosed();
    }

    return (
        <div className="modal-container">
            <img src={selectedItem.image} alt={selectedItem.name} />
            <div className="modal-info">
                <button onClick={isClosed}>x</button>
                <h4>Squishmallows</h4>
                <h2>{selectedItem.name}</h2>
                <br/>
                <p>${selectedItem.price}</p>
                <br/>
                <p>{selectedItem.description}</p>
                <br/>
                <div className="add-to-cart-buttons">
                    <div className="quantity">
                        <button onClick={handleDecrement}>-</button>
                        <p>{numItems}</p>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onClick={handleAdd}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
