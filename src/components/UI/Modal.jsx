import React from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHideCard}></div>
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content} >{props.children}</div>
        </div>
    )
}

const protalElement = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <div>
            {ReactDom.createPortal(<Backdrop onHideCard={props.onHideCard} />,protalElement)}  
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,protalElement)}  
        </div>
    )
}

export default Modal
