import React, { useState } from 'react'

export default function MappedElement({ index, item }) {
    const [hover, setHover] = useState(false);

    function mouseOver() {
        setHover(true);
    }

    function mouseLeave() {
        setHover(false);
    }

  return (
    <div key={index} className="item" onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
        <h3>{item.name}</h3>
        <img src={hover && item.side ? item.side : item.image} alt={item.name} />
        <div>
            <p>${item.price}</p>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}
