import React, { useState, useEffect, useContext } from 'react'
import { squishmallows } from '../data/items'
import Modal from '../components/Modal';
import Cart from '../components/Cart';
import CostContext from '../components/CostContext';
import MappedElement from '../components/MappedElement';

import logo from '../assets/logo.png'

import './Items.css'

export default function Items() {
    const context = useContext(CostContext);
    const [showModal, setShowModal] = useState(false);
    const [total, setTotal] = useState(context.cost);
    const [selectedItem, setSelectedItem] = useState(null);
    const [open, setOpen] = useState(false);

    function handleCloseModel() {
        setSelectedItem(null);
        setShowModal(false);
    }

    function toggleCart() {
        setOpen(!open);
    }

    useEffect(() => {
        if (selectedItem) {
            setShowModal(true);
        }
        setTotal(context.cost);
        console.log(context.cost);
    }, [context.cost, selectedItem]);

  return (
    <>
        <div className="header">
            <img className="logo" src={logo} alt="logo"/>
            <div className="cart-container">
                <p>${total}</p>
                <button className="cart-button" onClick={toggleCart}>Cart</button>
            </div>
        </div>
        <div className="container">
            <div className="items-container">
                {squishmallows.map((item, index) => (
                    <div onClick={() => setSelectedItem(item)}>
                        <MappedElement index={index} item={item}/>
                    </div>
                ))}
            </div>
        {showModal && <Modal selectedItem={selectedItem} isOpen={showModal} isClosed={handleCloseModel}/>}
        {open && <Cart isOpen={open} items={context.items} toggle={toggleCart}/>}
        </div>

    </>
  )
}
