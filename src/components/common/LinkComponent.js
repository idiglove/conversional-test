import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal, selectIsModalOpen } from './../../slices/commonSlice';

export const LinkComponent = ({contentProps}) => {
    const isModalOpen = useSelector(selectIsModalOpen);
    const dispatch = useDispatch();

    return (
        <a href={contentProps.url} target="_blank" rel="noreferrer" onClick={() => dispatch(toggleModal(!isModalOpen))}>{contentProps.text}</a>
    )
}