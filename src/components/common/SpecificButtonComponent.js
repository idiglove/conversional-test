import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSpecificModal, selectModals } from './../../slices/commonSlice';

export const SpecificButtonComponent = ({contentProps}) => {
    const modals = useSelector(selectModals);
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(toggleSpecificModal({
            id: contentProps.target,
            val: !modals[contentProps.target]
        }))}>{contentProps.text}</button>
    )
}