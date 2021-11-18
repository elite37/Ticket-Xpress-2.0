import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./TabLink.css";
import { handleLogOut } from "../../utils";

function TabLink({ route, name, Icon, active, logoutbtn }) {
  const [state, setState] = useState("Overview");

  const handleClick = () => {
    setState(name);

    if (logoutbtn) {
      console.log("Logout btn");
      handleLogOut();
      window.location = "/signin";
    }
  };

  return (
    <li className={`tab-list  ${state === name && "tab-list-active"}`}>
      <Link to={route} onClick={handleClick}>
        {" "}
        <Icon /> <span>{name}</span>
      </Link>
    </li>
  );
}

export default TabLink;
