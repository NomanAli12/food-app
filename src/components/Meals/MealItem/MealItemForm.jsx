import React, { useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useRef } from 'react'

const MealItemForm = (props) => {
    
    const [amountValid , setAmountValid] = useState(true)
    
    const amountInputRef = useRef()
    
    const submitHandler = (event) => {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;   // yhan ye + is lie lagaya hai ta k ye string ko number me convert kry ya ye is value ko as a number le 

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountValid(false)
            return;
        }
        props.onAddToCart(enteredAmountNumber)
    }


    return (
        <div>
            <form  className={classes.form} onSubmit={submitHandler}>
                <Input label="Amount"
                    ref={amountInputRef}
                    input={{
                        id: 'amount_' + props.id,
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1'
                    }}
                />
                <button>+ Add</button>
                {!amountValid && <p>Please enter the valid amount</p>}
            </form>
        </div>
    )
}

export default MealItemForm
