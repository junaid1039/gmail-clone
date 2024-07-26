import React from 'react';
import './emails.css'
import Emailsettings from './Emailsetting';
import Emailtype from './Emailtype';
import Emailbody from '../Emailbody/Emailbody';

const Emails = () =>{

    return(
        <div className='main-box'>
            <Emailsettings/>
            <Emailtype/>
            <Emailbody/>
        </div>
    )
};

export default Emails;