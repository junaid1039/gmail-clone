import React from 'react';
import './emailsetting.css'
import { IconButton } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const Emailsettings = () =>{

    return(
        <div className='settings'>
            <div className='s-left'>
                <IconButton>
                    <CheckBoxOutlineBlankIcon/>
                </IconButton>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                <IconButton>
                    <RefreshIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
            <div className='s-right'>
                <p>1-50 of 1023</p>
                <IconButton>
                    <KeyboardArrowLeftIcon/>
                </IconButton><IconButton>
                    <KeyboardArrowRightIcon/>
                </IconButton>

            </div>
        </div>
        
    )
};

export default Emailsettings;