import React from 'react';

export const ListComponent = ({contentProps}) => {
    return (
        <ul>
            {
                contentProps.li.map((item, i) => 
                    <li key={i}>
                        {item}
                    </li>
                )
            }
        </ul>
    )
}