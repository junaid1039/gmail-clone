import React from 'react';
import Button from '@mui/material/Button';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import './Sidebar.css';
import Options from './Options';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useState } from 'react';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <Button startIcon={<CreateOutlinedIcon />} className='s-btn'>Compose</Button>
            <Options Icon={InboxIcon} text="Inbox" nmbr="124"/>
            <Options Icon={StarBorderIcon} text="Starred" nmbr="124" />
            <Options Icon={AccessTimeOutlinedIcon} text="Snoozed" nmbr="124" />
            <Options Icon={SendOutlinedIcon} text="Sent" nmbr="124" />
            <Options Icon={DraftsIcon} text="Drafts" nmbr="124" />
        </div>
    )
};

export default Sidebar;
