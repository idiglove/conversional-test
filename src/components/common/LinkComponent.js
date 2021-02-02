import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal, selectIsModalOpen } from './../../slices/commonSlice';

export const LinkComponent = ({text, url}) => {
    const isModalOpen = useSelector(selectIsModalOpen);
    const dispatch = useDispatch();

    return (
        <a href={url} target="_blank" onClick={() => dispatch(toggleModal(!isModalOpen))}>{text}</a>
    )
}