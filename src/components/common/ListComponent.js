import React from 'react';

export const ListComponent = ({li}) => {
    console.log(43, li)
    return (
        <ul>
            {
                li.map((item, i) => 
                    <li key={i}>
                        {item}
                    </li>
                )
            }
        </ul>
    )
}