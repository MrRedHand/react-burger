import React, {FC, useState, useEffect, useMemo, useCallback} from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import st from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalHeader from '../modal-header/modal-header';
import {useHistory} from "react-router-dom";
import {TModal} from "../../utils/types";


const Modal : FC<TModal> = ({activity, children, heading, onCloseEvent}) => {

    const history = useHistory()

    const modalRoot = document.getElementById("react-modals")!;

    const body : null | HTMLBodyElement = document.querySelector('body')

    const [active, setActive] = useState(activity)


    const closeModal = () => {
        setActive(false)
    }

    const onClose = () => {
        onCloseEvent && onCloseEvent()
    }

    useEffect(() => {
        active ? body?.classList.add('modal-active') : body?.classList.remove('modal-active')

        const closeOnEsc = (e: KeyboardEvent) => {
            if( e.key  === "Escape") {
                closeModal()
            }
        }

        !active && onClose()

        document.addEventListener('keydown', closeOnEsc)

        return () => {
            body?.classList.remove('modal-active')
            document.removeEventListener('keydown', closeOnEsc)
        }


    }, [active])

    return ReactDOM.createPortal ( 
    <>
        <div className={`${st.modal} ${active ? st.active : ''}`}>
            <ModalHeader>
                {heading ? <p className='text text_type_main-large'>{heading}</p> : ''}
                <button className={st.close} onClick={() => closeModal()}>
                    <CloseIcon type="primary"/>
                </button>
            </ModalHeader>
            <div className={st.modal_inner}>
                {children}
            </div>
        </div>
        <ModalOverlay onClick={closeModal} activity={active}/>
    </>,
    modalRoot
    );
}


export default Modal