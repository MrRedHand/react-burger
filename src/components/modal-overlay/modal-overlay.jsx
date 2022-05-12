import React from 'react'
import PropTypes from "prop-types";
import st from './modal-overlay.module.css'

const ModalOverlay = ({onClick,activity}) => {
    return (
        <div onClick={onClick} className={`${st.overlay} ${activity === true ? st.active : ''}`}></div>
    )
}

ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired,
    activity : PropTypes.bool.isRequired
}

export default ModalOverlay