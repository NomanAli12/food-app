import React from 'react'
import meals from '../assets/meals.jpg'
import classes from './Header.module.css'
import CartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <div>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                 <CartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="A table full of meal" />
            </div>
        </div>
    )
}

export default Header
