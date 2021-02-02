import React from 'react';

import { BoxComponent } from '../components/common/BoxComponent';
import { ModalComponent } from '../components/common/ModalComponent';
import { H1Component } from '../components/common/H1Component';
import { ButtonComponent } from '../components/common/ButtonComponent';

export const makeParentComp = (data, index = 0) => {
    let type = <></>;

    switch (data.Content.type) {
        case 'BoxComponent':
            type = <BoxComponent key={index} childComp={data.Children} styleProps={data.Content.props} />;
            break;
        case 'ModalComponent':
            type = <ModalComponent key={index} childComp={data.Children} />;
            break;
        case 'H1Component':
            type = <H1Component key={index} />;
            break;
        case 'ButtonComponent':
            type = <ButtonComponent key={index} text={data.Content.props.text} />;
            break;
        default:
            type = <BoxComponent key={index} childComp={data.Children} />;
    }

    return type;
}