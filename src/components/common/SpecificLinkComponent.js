import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSpecificModal, selectModals } from './../../slices/commonSlice';

export const SpecificLinkComponent = ({contentProps}) => {
    const modals = useSelector(selectModals);
    const dispatch = useDispatch();

    return (
        <a href={contentProps.url} target="_blank" rel="noreferrer" onClick={() => dispatch(toggleSpecificModal({
            id: contentProps.target,
            val: !modals[contentProps.target]
        }))}>{contentProps.text}</a>
    )
}