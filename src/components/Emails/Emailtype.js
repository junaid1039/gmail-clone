import React from 'react';
import './emailtype.css';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ReportGmailerrorredSharpIcon from '@mui/icons-material/ReportGmailerrorredSharp';

const Emailtype = () => {

    return (
        <div className='email'>
            <div className='c-left'>
                <InboxIcon />
                <p>Primary</p>
            </div>
            <div className='c-middle1'>
                <LocalOfferOutlinedIcon />
                <p>Promotion</p>
            </div>
            <div className='c-middle2'>
                <PeopleOutlineOutlinedIcon />
                <p>Social</p>
            </div>
            <div className='c-right'>
                <ReportGmailerrorredSharpIcon />
                <p>Updates</p>
            </div>
        </div>
    )
};

export default Emailtype;