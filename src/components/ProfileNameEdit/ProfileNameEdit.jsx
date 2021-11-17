import { KeyboardArrowDownRounded } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfileNameEdit.css";

const ProfileNameEdit = () => {
  const [profileName, setProfileName] = useState("Abayomi Alabi");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);

  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <span className="nameWrapper">
            <h1> {profileName} </h1>
          </span>
          <div className="menu">
            <KeyboardArrowDownRounded
              fontSize="large"
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}> <Link to="/editaccount" className="links" >Edit Profile</Link> </MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileNameEdit;
