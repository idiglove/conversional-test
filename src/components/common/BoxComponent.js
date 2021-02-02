import React from 'react';
import { useChildComp } from './../../hooks/useChildComp';

export const BoxComponent = ({childComp, styleProps}) => {
    let childComponent = useChildComp(childComp);

    return (
        <div className="box-comp" style={{borderWidth: styleProps?.borderSize}}>
            {childComponent}
        </div>
    )
}