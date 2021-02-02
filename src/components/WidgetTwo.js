import React from 'react';

// import { BoxComponent } from './common/BoxComponent';
// import { ModalComponent } from './common/ModalComponent';
import data from './../data/data2.json';
import { makeParentComp } from '../hooks/makeParentComp';

export const WidgetTwo = () => {
    const parentComp = makeParentComp(data);

    return (
        <>
            {parentComp}
        </>
    )
}