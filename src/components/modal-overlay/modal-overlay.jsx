import React from 'react'
import st from './modal-overlay.module.css'

const ModalOverlay = ({onClick,activity}) => {
    return (
        <div onClick={onClick} className={`${st.overlay} ${activity === true ? st.active : ''}`}></div>
    )
}


export default ModalOverlay