import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import st from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalHeader from '../modal-header/modal-header';
import {useHistory} from "react-router-dom";

const Modal = ({activity, children, heading}) => {

    const history = useHistory()

    const modalRoot = document.getElementById("react-modals");

    const body = document.querySelector('body')

    const [active, setActive] = useState(activity)

    const closeModal = () => {
        setActive(false)
        setTimeout(() => {history.push('/', {})}, 50)
    }

    React.useEffect(() => {
        active ? body.classList.add('modal-active') : body.classList.remove('modal-active')

        const closeOnEsc = (e) => {
            if( e.key === "Escape") {
                closeModal()
            }
        }

        document.addEventListener('keydown', closeOnEsc)

        return () => document.removeEventListener('keydown', closeOnEsc)

    }, [active])

    return ReactDOM.createPortal ( 
    <>
        <div className={`${st.modal} ${active ? st.active : ''}`}>
            <ModalHeader>
                {heading ? <p className='text text_type_main-large'>{heading}</p> : ''}
                <button className={st.close} onClick={() => closeModal()}>
                    <CloseIcon />
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