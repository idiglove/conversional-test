import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal, selectIsModalOpen } from './../../slices/commonSlice';

export const ButtonComponent = ({text}) => {
    const isModalOpen = useSelector(selectIsModalOpen);
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(toggleModal(!isModalOpen))}>{text}</button>
    )
}