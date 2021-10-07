import React, { useState } from 'react';
import ReactDOM  from 'react-dom';

const Modal = (props) => {

    const [open, setOpen] = useState(true)

    const closeModal = () => {
        setOpen(false);
    }

    if(open){
        return ReactDOM.createPortal(
            <div className='ui dimmer show modals visible active' >
            <div className='ui raised very padded text container segment' >
                <div className='close'>
                    <i className='close icon' onClick={closeModal}></i>
                </div>
                <h1>I am Modal</h1>
            </div>
        </div>,
         document.getElementById('modal')
        )
    }
    return null;
}

export default Modal;