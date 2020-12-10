import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div
        className="list-group"
        style={{ paddingleft: "10px", border: "1.5px solid  #9ea8a3" }}
      >
        <a
          href="/Patientreg"
          className="card-header"
          style={{ WebkitTextFillColor: "black" }}
        >
          Select Regestration Type
        </a>

        <Link
          className="nav-link Active list-group-item list-group-item-action"
          to="/Patientreg"
        >
          <b> Signup as Patient</b>
        </Link>
        <Link
          className="nav-link Active list-group-item list-group-item-action"
          to="/doctorreg"
        >
          <b> Signup as Doctor</b>
        </Link>
      </div>
    );
  }
}

export default Sidebar;
