import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../context/CartContext'


const HeaderCartButton = (props) => {

    const cartCntxt = useContext(CartContext)

    const numberOfCartItems = cartCntxt.items.reduce((curentNum, item) => {
        return curentNum + item.amount
    }, 0)


    return (
        <div>
            <button className={classes.button} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
        </div>
    )
}

export default HeaderCartButton
