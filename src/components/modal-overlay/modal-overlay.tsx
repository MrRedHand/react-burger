import React, {FC} from 'react'
import st from './modal-overlay.module.css'
import { TModalOverlay } from "../../utils/types";

const ModalOverlay : FC<TModalOverlay> = ({onClick,activity}) => {
    return (
        <div onClick={onClick} className={`${st.overlay} ${activity === true ? st.active : ''}`}></div>
    )
}


export default ModalOverlay