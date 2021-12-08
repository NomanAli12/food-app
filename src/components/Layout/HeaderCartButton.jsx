import React, { useContext , useState , useEffect} from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../context/CartContext'


const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const cartCntxt = useContext(CartContext)

    const numberOfCartItems = cartCntxt.items.reduce((curentNum, item) => {
        return curentNum + item.amount
    }, 0)
     
    const {items} = cartCntxt

    const btnClasses = `${classes.button} ${ btnIsHighlighted ?  classes.bump : ''}`
    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setBtnIsHighlighted(true)
        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false)
        },300)

        return ()=>{
            clearTimeout(timer)
        }
    }, [items])
    return (
        <div>
            <button className={btnClasses} onClick={props.onClick}>
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
