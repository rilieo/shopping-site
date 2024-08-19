import React, { useState } from 'react'

export default function MappedElement({ index, squish }) {
    const [hover, setHover] = useState(false);

    function mouseOver() {
        setHover(true);
    }

    function mouseLeave() {
        setHover(false);
    }

  return (
    <div key={index} className="item" onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
        <h3>{squish.name}</h3>
        <img src={hover && squish.side ? squish.side : squish.image} alt={squish.name} />
        <div>
            <p>${squish.price.toString()}</p>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}
