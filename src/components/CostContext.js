import React, { createContext, useState } from "react";

const CostContext = createContext();

export function CostContextProvider( props ) {
    const [cost, setCost] = useState(0);
    const [items, setItems] = useState([]);

    const costHandler = ({price}) => {
        if (cost + price < 0.05) {
            setCost(0);
        } else {
            setCost(cost + price); 
        }
    }

    const itemHandler = ({item, quantity}) => {
        setItems([...items, {item, quantity}]);
    }

    const quantityHandler = ({index, quantity}) => {
        let newItems = [...items];
        newItems[index].quantity = quantity;
        setItems(newItems);
    }

    const removeItemHandler = (index) => {
        let newItems = items.filter((item, i) => i !== index);
        setItems(newItems);
    }

  return (
    <CostContext.Provider value={{ cost: cost, setCost: setCost, costHandler: costHandler, items: items, setItems: setItems, itemHandler: itemHandler, quantityHandler: quantityHandler, removeItemHandler: removeItemHandler }}>
        {props.children}
    </CostContext.Provider>
  )
}

export default CostContext;
