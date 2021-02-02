import React from 'react';

import { makeParentComp } from './makeParentComp';

export const useChildComp = (childComp) => {
    if (childComp) {
        let obj = <></>;

        let objects = Object.keys(childComp).map((c, i) => {
            let childObj = childComp[c]; //grandchildren
            console.log(22, childObj)
            if (childObj.Content) {
                let childParentComp = makeParentComp(childObj, i);
                return childParentComp;
            }

            return obj;
        })

        return objects;
    }
}