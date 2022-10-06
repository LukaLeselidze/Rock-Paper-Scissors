import React from 'react'
import './Modal.css'
import rules from '../images/image-rules.svg'
import close from '../images/icon-close.svg'

function Modal({ toggle }) {
    return (
        <>
            <div className='modal'>
                <h2>Rules</h2>
                <div className='photo'>
                    <img src={rules}></img>
                    <img onClick={toggle} className='close' src={close}></img>
                </div>

            </div>


        </>
    )
}

export default Modal