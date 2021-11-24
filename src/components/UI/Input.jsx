import React from 'react'
import classes from './Input.module.css'



const Input = React.forwardRef((props , ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>                                                           
            <input ref={ref} {...props.input} />  {/* {yahan ye{...props.input} is lie lagya hain ta k wahan se pata chaly k text aa rha ha ya number } */} 

        </div>
    )
})

export default Input
