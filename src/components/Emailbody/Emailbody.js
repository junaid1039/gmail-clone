import React from 'react';
import './emailbody.css';
import { IconButton } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Emailbody = ({ sender, message, time, subject }) => {

    return (
        <div className='emailbody'>
            <div className='b-left'>
                <IconButton>
                    <CheckBoxOutlineBlankIcon />
                </IconButton>
                <IconButton>
                    <StarBorderIcon />
                </IconButton>
                <h1>{sender}</h1>
            </div>
            <div className='b-middle'>
                <h1>{subject}</h1>
                <p> - </p>
                <p>{message}</p>
            </div>
            <div className='b-right'>
                <p>{time}</p>
                <IconButton><ArchiveOutlinedIcon /></IconButton>
                <IconButton><DeleteForeverOutlinedIcon /></IconButton>
                <IconButton><EmailOutlinedIcon /></IconButton>
                <IconButton><AccessTimeIcon /></IconButton>
            </div>

        </div>
    )
};

export default Emailbody;