import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsModalOpen, toggleModal } from './../../slices/commonSlice';
import { useChildComp } from './../../hooks/useChildComp';

export const ModalComponent = ({childComp, isOpen, width, height}) => {
    const isModalOpen = useSelector(selectIsModalOpen);
    const dispatch = useDispatch();
    let childComponent = useChildComp(childComp);

    useEffect(() => {
        if (isOpen) {
            dispatch(toggleModal(isOpen));
        }
    }, [isOpen])

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          width: `${width}`,
          height: `${height}`
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
    
    return (
        <Modal
            isOpen={isModalOpen}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
            >
                <button onClick={() => dispatch(toggleModal(!isModalOpen))}>close</button>
                {childComponent}
        </Modal>
    )
}