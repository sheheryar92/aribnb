import { Container } from "@material-ui/core";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../AirB&B/Styles/Header.css";
function Header() {
  return (
    <Container maxWidth="xl" className="header_container">
 
      <div className="header">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt=""
          srcset=""
        />

<div className="header_center" >
          <input className="Header_Search" type="search" />
          <SearchIcon />
</div>


        <div className="header_right">
                  become a host?
                  <LanguageIcon />
                  <KeyboardArrowDownIcon/>
                  <AccountCircleIcon/>
        </div>

      </div>
      ;
    </Container>
  );
}

export default Header;
