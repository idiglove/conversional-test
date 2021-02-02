import React from 'react';

import { BoxComponent } from '../components/common/BoxComponent';
import { ModalComponent } from '../components/common/ModalComponent';
import { SpecificModalComponent } from '../components/common/SpecificModalComponent';
import { H1Component } from '../components/common/H1Component';
import { H2Component } from '../components/common/H2Component';
import { ButtonComponent } from '../components/common/ButtonComponent';
import { SpecificButtonComponent } from '../components/common/SpecificButtonComponent';
import { ParagraphComponent } from '../components/common/ParagraphComponent';
import { LinkComponent } from '../components/common/LinkComponent';
import { SpecificLinkComponent } from '../components/common/SpecificLinkComponent';
import { ListComponent } from '../components/common/ListComponent';

export const makeParentComp = (data, index = 0) => {
    let type = <></>;
    let contentProps = data.Content.props || null;

    switch (data.Content.type) {
        case 'BoxComponent':
            type = <BoxComponent key={index} childComp={data.Children} contentProps={contentProps} />;
            break;
        case 'ModalComponent':
            if (data.Content.id) {
                type = <SpecificModalComponent key={index} id={data.Content.id} contentProps={contentProps} childComp={data.Children} />;
                break;
            }

            type = <ModalComponent key={index} contentProps={contentProps} childComp={data.Children} />;
            break;
        case 'H1Component':
            type = <H1Component key={index} contentProps={contentProps} />;
            break;
        case 'H2Component':
            type = <H2Component key={index} contentProps={contentProps} />;
            break;
        case 'ListComponent':
            type = <ListComponent key={index}  contentProps={contentProps} />;
            break;
        case 'ButtonComponent':
            if (contentProps.target) {
                type = <SpecificButtonComponent key={index} contentProps={contentProps} />;
                break;
            }
            type = <ButtonComponent key={index} contentProps={contentProps} />;
            break;
        case 'ParagraphComponent':
            type = <ParagraphComponent key={index} contentProps={contentProps} />;
            break;
        case 'LinkComponent':
            if (contentProps.target) {
                type = <SpecificLinkComponent key={index} contentProps={contentProps} />;
                break;
            }

            type = <LinkComponent key={index} contentProps={contentProps} />;
            break;
        default:
            type = <></>;
    }

    return type;
}