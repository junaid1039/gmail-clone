import React from 'react';
import "./Header.css";
import logo from './logo.png';
import img from './img.jpg'
import { IconButton, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';

const Header = () => {

    return(

        <div className='header'>
            <div className='h-left'>
               <IconButton>
               <MenuIcon></MenuIcon>
               </IconButton>
               <img src={logo} alt='Logo'/>
            </div>
            <div className='h-middle'>
            <IconButton>
               <SearchIcon></SearchIcon>
               </IconButton>
               <input type='text' placeholder='Search Mail'></input>
               <IconButton>
                <TuneIcon></TuneIcon>
               </IconButton>
            </div>
            <div className='h-right'>
                <IconButton>
                    <HelpOutlineIcon></HelpOutlineIcon>
                </IconButton>
                <IconButton>
                <SettingsIcon></SettingsIcon>
                </IconButton>
                <IconButton>
                    <AppsRoundedIcon></AppsRoundedIcon>
                </IconButton>
                <Avatar src={img} alt="J" id="avator"></Avatar>
            </div>
        </div>

    )
};

export default Header;