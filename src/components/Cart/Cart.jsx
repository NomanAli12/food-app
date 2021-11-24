import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../context/CartContext'
import CartItem from './CartItem'

const Cart = (props) => {
    // const cartItem = [{ id: 'c1', name: 'Sushi', amount: 2, price: 14.56 }]

    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => { }
    const cartItemAddHandler = (item) => { }

    return (
        <Modal onHideCard={props.onHideCard}> {/* ye props is modal se aya hai wahan se pass ho rha hai */}
            <ul className={classes['cart-items']}>
                {cartCtx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={cartItemRemoveHandler.bind(null,item.id)} 
                        onAdd={cartItemAddHandler.bind(null,item)}
                        />
                        ))}
                        {/*ye bind yahan ye insure krta hai k ye functions argument me ye chizen lega jo hum ne define ki hui hoti hai */}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCard}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
