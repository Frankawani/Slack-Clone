import React from "react";
import "../Css/Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search Frank Awani Slack" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
      <div className="header__end">
        <AccountCircleIcon
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
      </div>
    </div>
  );
}

export default Header;
