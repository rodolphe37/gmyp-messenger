import { Avatar } from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AccesTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search'
import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        {/*Avatars for logged in user */}
        <Avatar className="header_avatar" alt="rodolphe Augusto" src='' />

        {/*Time icon */}
        <AccesTimeIcon />

      </div>
      <div className="header_search">
        {/*Search icon */}
        <SearchIcon />
        {/*input */}
        <input placeholder="Search" type='text' />
      </div>
      <div className="header_right">
        {/*Help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  )
}

export default Header
