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
            <Emailbody subject=" Testing" sender="Junaid" message="Dummy" time="12:02 PM"/>
        </div>
    )
};

export default Emails;