import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../context/CartContext'

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
    const cartCxt  = useContext(CartContext)
    
    const addToCartHandler = (amount)=>{
     cartCxt.addItem({
         id: props.id,
         name: props.name,
         amount: amount,
         price: props.price
     });   
        
    }
    return (
        <div>
            <li className={classes.meal}>
                <div>
                    <h3>{props.name}</h3>
                    <div className={classes.description} >{props.description}</div>
                    <div className={classes.price}>{price}</div>
                </div>
                <div>
                    <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
                </div>
            </li>
        </div>
    )
}

export default MealItem
