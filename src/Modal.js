import './Modal.css'
import { useState } from 'react'

function Modal({ imgSrc, changeState, showModal }) {
    console.log(showModal)
    const [hideModal, setHideModal] = useState(showModal)
    return (
        <div className={"modalOverlay " + (hideModal ? "active " : "inactive ")} onClick={changeState}>
            <div className="imageContainer">
                <img src={imgSrc} className="overlayImage" />
            </div>
        </div>
    )
}

export default Modal