import React, { useRef , useState } from 'react'
import classes from './Checkout.module.css'

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (v) => v.trim().length === 5
    ;
const Checkout = (props) => {
     
    const [formInputValidity ,  setFormInputValidity] = useState({
        name: true ,
        street: true,
        city: true,
        postalCode : true,
    });

    const nameInput = useRef()
    const streetInput = useRef()
    const postalCodeInput = useRef()
    const cityInput = useRef()



    const formSubmitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInput.current.value;
        const enteredStreet = streetInput.current.value;
        const enteredPostalCode = postalCodeInput.current.value;
        const enteredCity = cityInput.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode:enteredPostalCodeIsValid,
        })

        const formIsValid = enteredNameIsValid && enteredPostalCodeIsValid && enteredStreetIsValid && enteredCityIsValid;
        
        if(!formIsValid){
            return ;
        }
       
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode,
        })

    }


    return (
        <div>
            <form className={classes.form} onSubmit={formSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id='name' ref={nameInput} />
                    {!formInputValidity.name && <p>please enter a valid name</p>}
                </div>
                <div className={classes.control}>
                    <label htmlFor="street">Street</label>
                    <input type="text" id='street' ref={streetInput} />
                    {!formInputValidity.street && <p>please enter a valid street</p>}
                </div>
                <div className={classes.control}>
                    <label htmlFor="postal">Postal Code</label>
                    <input type="text" id='postal' ref={postalCodeInput} />
                    {!formInputValidity.postalCode && <p>please enter a valid postal Code</p>}
                </div>
                <div className={classes.control}>
                    <label htmlFor="city">City</label>
                    <input type="text" id='city' ref={cityInput} />
                    {!formInputValidity.city && <p>please enter a valid city</p>}
                </div>
                <div className={classes.actions}>

                    <button type='button' onClick={props.onCancel}>Cancel</button>
                    <button className={classes.submit}>Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default Checkout
