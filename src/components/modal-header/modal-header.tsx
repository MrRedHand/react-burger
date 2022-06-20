import React, {FC} from 'react';
import st from './modal-header.module.css';
import { TModalHeader } from "../../utils/types";

const ModalHeader : FC<TModalHeader>= ({children}) => {
    return (
        <div className={st.header}>
            {children}
        </div>
    )
}

export default ModalHeader