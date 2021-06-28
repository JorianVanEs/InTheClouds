import React, { useState } from 'react';

const Modal = (props) => {
    const [display, setDisplay] = useState('none');

    const handleClose = () => {
        setDisplay('none');
        props.startExperience();
    }

    return (
        <div className="modal" style={{display: display}}>
            <div onClick={() => {handleClose()}}>close</div>
        </div>
    )
}

export default Modal;