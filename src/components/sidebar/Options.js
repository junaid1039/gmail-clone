import React from 'react';
import './Options.css';
const Options = ({ Icon, text, nmbr }) => {
        
    return (
        <div className='options'>
            <Icon />
            <h3>{text}</h3>
            <p>{nmbr}</p>
        </div>
    )
};

export default Options;
