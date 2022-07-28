import React from "react";
import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service";

export default function NavBar(props) {
  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <nav>
      <h1 className="logo">ABC Baking Studio</h1>
      <span>Welcome, {props.user.name}</span>
      &nbsp; | &nbsp;
      <Link to="/">
        <button className="navButton" style={{ color: "#003580" }}>
          Home
        </button>
      </Link>
      <Link to="/users/myAccount">
        <button className="navButton" style={{ color: "#003580" }}>
          My Account
        </button>
      </Link>
      &nbsp; | &nbsp;
      <Link to="/calendar">
        <button className="navButton" style={{ color: "#003580" }}>
          Class Calender
        </button>
      </Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        <button className="navButton" style={{ color: "#003580" }}>
          Log Out
        </button>
      </Link>
    </nav>
  );
}
