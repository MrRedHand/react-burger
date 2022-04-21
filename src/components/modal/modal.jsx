import React from 'react';
import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById("react-modals");

const Modal = () => {

    const [activity, setPopup] = React.useState(false)

    const closeModal = () => {
        setPopup(false)
    }

    React.useEffect(() => {
        current.active === true ? 
        modalRoot.classList.add('modal-active') : 
        modalRoot.classList.remove('modal-active')

        document.addEventListener('keydown', (e) => {
            if( e.key === "Escape") {
                closeModal()
            }
        });
    })

    return ReactDOM.createPortal(
    <>
        <div className="Modal">
        <ModalHeader onClose={closeModal}>
            {header}
        </ModalHeader>
        {children}
        </div>
        <ModalOverlay onClose={closeModal} />
    </>,
    modalRoot
    );
}

export default Modal