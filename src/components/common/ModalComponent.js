import React from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsModalOpen, toggleModal } from './../../slices/commonSlice';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
};

export const ModalComponent = ({children}) => {
    const isModalOpen = useSelector(selectIsModalOpen);
    const dispatch = useDispatch();
    
    return (
        <div className="modal-comp">
            <Modal
                isOpen={isModalOpen}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
                >
                    <button onClick={() => dispatch(toggleModal(!isModalOpen))}>close</button>
                    {children}
            </Modal>
        </div>
    )
}