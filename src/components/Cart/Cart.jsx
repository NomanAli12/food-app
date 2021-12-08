import React, { useContext, useState } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../context/CartContext'
import CartItem from './CartItem'
import Checkout from './Checkout'


const Cart = (props) => {
    // const cartItem = [{ id: 'c1', name: 'Sushi', amount: 2, price: 14.56 }]
    const [isCheckout, setIsCheckout] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)
    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const orderHandler = () => {
        setIsCheckout(true);
    }
    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true)
        await fetch('https://food-react-880e7-default-rtdb.firebaseio.com/order.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        })
        setIsSubmitting(false)
        setDidSubmit(true)
        cartCtx.clearCart()
    }

    const cartModalContent = <React.Fragment>
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
            {/*ye bind yahan ye insure krta hai k ye functions argument me ye chizen lega jo hum ne define ki hui hoti hai */}
        </ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span> ${totalAmount}</span>
        </div>

        {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCard} />}

        {!isCheckout &&
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCard}>Close</button>
                {hasItems && <button className={classes.button} onClick={orderHandler} >Order</button>}
            </div>
        }
    </React.Fragment>
    
     const isSubmittingMOdalContent = <p>sending Order Data ...</p> 
     const didSubmitModalContent =<React.Fragment>
         <p>Successfully Submitted the Order ....</p>
         <div className={classes.actions}>
                <button className={classes.button} onClick={props.onHideCard}>Close</button>
                
            </div>
     </React.Fragment> 


    return (
        <Modal onHideCard={props.onHideCard}> {/* ye props is modal se aya hai wahan se pass ho rha hai */}
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingMOdalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    )
}

export default Cart
