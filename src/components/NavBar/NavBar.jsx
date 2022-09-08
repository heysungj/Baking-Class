import React from "react";
import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar(props) {
  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <h1 className="navbar-brand" href="#">
            ABC Baking Studio
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarNav"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/calendar">
                  Class Calender
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="" onClick={handleLogOut}>
                  Log Out
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" to="/users/myAccount">
                  Welcome, {props.user.name}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="imgIsolater"></div>
    </div>
  );
}
