import React from 'react';
import { useChildComp } from './../../hooks/useChildComp';

export const BoxComponent = ({childComp, contentProps}) => {
    let childComponent = useChildComp(childComp);

    return (
        <div className="box-comp" style={{borderWidth: contentProps?.borderSize}}>
            {childComponent}
        </div>
    )
}