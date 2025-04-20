import React from 'react'
import CartTotal from '../containers/CartTotal'
import { NavLink } from 'react-router'

const Cart = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Cart</h1>
            <CartTotal />
        </div>
    )
}

export default Cart