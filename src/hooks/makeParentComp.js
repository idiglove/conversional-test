import React from 'react';

import { BoxComponent } from '../components/common/BoxComponent';
import { ModalComponent } from '../components/common/ModalComponent';
import { H1Component } from '../components/common/H1Component';
import { H2Component } from '../components/common/H2Component';
import { ButtonComponent } from '../components/common/ButtonComponent';
import { ParagraphComponent } from '../components/common/ParagraphComponent';
import { LinkComponent } from '../components/common/LinkComponent';
import { ListComponent } from '../components/common/ListComponent';

export const makeParentComp = (data, index = 0) => {
    let type = <></>;
    let contentProps = data.Content.props || null;

    switch (data.Content.type) {
        case 'BoxComponent':
            type = <BoxComponent key={index} childComp={data.Children} styleProps={data.Content.props} />;
            break;
        case 'ModalComponent':
            type = <ModalComponent key={index} isOpen={contentProps?.isOpen} width={contentProps?.width} 
                height={contentProps?.height} childComp={data.Children} />;
            break;
        case 'H1Component':
            type = <H1Component key={index} text={contentProps.text} />;
            break;
        case 'H2Component':
            type = <H2Component key={index} text={contentProps.text} />;
            break;
        case 'ListComponent':
            type = <ListComponent key={index} li={contentProps.li} />;
            break;
        case 'ButtonComponent':
            type = <ButtonComponent key={index} text={contentProps.text} />;
            break;
        case 'ParagraphComponent':
            type = <ParagraphComponent key={index} text={contentProps.text} />;
            break;
        case 'LinkComponent':
            type = <LinkComponent key={index} text={contentProps.text} url={contentProps.url} />;
            break;
        default:
            type = <></>;
    }

    return type;
}