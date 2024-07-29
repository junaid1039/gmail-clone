import React from 'react';
import './compose.css'
import { IconButton } from '@mui/material';
import MinimizeIcon from '@mui/icons-material/Minimize';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { EmojiEmotionsOutlined } from '@mui/icons-material';


const Compose = ({close})=>{
    
    return(
        <div className='compose'>
            <div className='c-header'>
                <p>New Message</p>
                <div>
                <IconButton><MinimizeIcon/></IconButton>
                <IconButton><OpenInFullIcon/></IconButton>
                <IconButton><CloseIcon onClick={close} /></IconButton>
                </div>
            </div>
            <div className='c-body'>
                <input type='email' placeholder='Recipients' className='i1' />
                <input type='text' placeholder='Subject' className='i2'/>
                <textarea rows="18"></textarea>
            </div>
            <div className='c-footer'>
                <div className='f-left'>
                    <button type='submit' className='btn' >Send <ArrowDropDownIcon/></button>
                    <IconButton><TextFormatIcon/></IconButton>
                    <IconButton><AttachFileIcon/></IconButton>
                    <IconButton><InsertLinkIcon/></IconButton>
                    <IconButton><EmojiEmotionsOutlined/></IconButton>
                    <IconButton><AddToDriveIcon/></IconButton>
                    <IconButton><InsertPhotoOutlinedIcon/></IconButton>
                    <IconButton><LockClockOutlinedIcon/></IconButton>
                    <IconButton><CreateOutlinedIcon/></IconButton>
                    <IconButton><MoreVertOutlinedIcon/></IconButton>
                </div>
                <IconButton><DeleteForeverOutlinedIcon onClick={close} /></IconButton>
            </div>
        </div>
    )
};

export default Compose;
