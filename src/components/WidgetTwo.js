import React from 'react';

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