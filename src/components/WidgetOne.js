import React, { useState } from 'react';

import { WidgetTwo } from './WidgetTwo';
import { WidgetThree } from './WidgetThree';
import data from './../data/data.json';
import { makeParentComp } from '../hooks/makeParentComp';

export const WidgetOne = () => {
    const [parent, setParent] = useState(<></>);

    return (
        <>
            <button onClick={() => setParent(makeParentComp(data))}>Widget 1</button>
            <button onClick={() => setParent(<WidgetTwo />)}>Widget 2</button>
            <button onClick={() => setParent(<WidgetThree />)}>Widget 3</button>
            {parent}
        </>
    )
}