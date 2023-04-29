import React from 'react';
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu"
import { IconButton } from '@mui/material';
import formImage from '../images/form.png';
import SearchIcon from '@mui/icons-material/Search';
import AppIcon from '@mui/icons-material/Apps';
import TempDraw from './TempDraw';


function Header() {
  return (
    <div className="header">
        <div className="header_info">
            <TempDraw />
            <img src={formImage} style={{width:'40px', height:'40px'}} className="form-image"/>
            <div className="info">
                Forms
            </div>
        </div>

        <div className="header_search">
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input type='text' name='search' placeholder='Search'/>
        </div>

        <div className="header_right">
            <IconButton>
                <AppIcon/>
            </IconButton>
        </div>

    </div>
  )
}

export default Header;