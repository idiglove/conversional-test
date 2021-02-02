import React, { useEffect } from 'react';

import data from './../data/data2_with_modals.json';
import { makeParentComp } from '../hooks/makeParentComp';
import { useDispatch } from 'react-redux';
import { setModals } from '../slices/commonSlice';

export const WidgetThree = () => {
    const parentComp = makeParentComp(data);
    const dispatch = useDispatch();

    function setModalToStore(obj) {
        if (obj.Content?.type === 'ModalComponent') {
            let contentProps = obj.Content?.props || null;

            dispatch(setModals({
                id: obj.Content?.id,
                val: contentProps?.isOpen || false
            }));
        }
    }

    useEffect(() => {
        Object.keys(data).map((d, i) => {
            setModalToStore(data[d]);
            
            if (d === 'Children') {
                Object.keys(data[d]).map((dc, j) => {
                    setModalToStore(data[d][dc]);
    
                    return false;
                });
            }
    
            return false;
        })
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {parentComp}
        </>
    )
}