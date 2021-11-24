import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'


const Cart = (props) => {
    const cartItem = [{ id: 'c1', name: 'Sushi', amount: 2, price: 14.56 }]

    return (
        <Modal onHideCard={props.onHideCard}> {/* ye props is modal se aya hai wahan se pass ho rha hai */ }
            <ul className={classes['cart-items']}>
                {cartItem.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.60</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCard}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
