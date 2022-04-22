import React from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import st from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalHeader from '../modal-header/modal-header';

const Modal = ({active, setActive, children}) => {

    const modalRoot = document.getElementById("react-modals");

    const closeModal = () => {
        setActive(prevState => ({
            ...prevState,
            active : false
        }))
    }

    React.useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if( e.key === "Escape") {
                closeModal()
            }
        });
    })

    return ReactDOM.createPortal ( 
    <>
        <div className={`${st.modal} ${active ? st.active : ''}`}>
            <ModalHeader>
                <p className='text text_type_main-large'>Детали ингредиента</p>
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