import React from 'react';
import './index.css';

export const Text = ({content, ...props}) => {
    return (
        <p id='generic'>{props.children}</p>
    )
};  
