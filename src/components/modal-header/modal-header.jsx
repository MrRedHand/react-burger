import React from 'react';
import st from './modal-header.module.css';

const ModalHeader = ({children}) => {
    return (
        <div className={st.header}>
            {children}
        </div>
    )
}

export default ModalHeader