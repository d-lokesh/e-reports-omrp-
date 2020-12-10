import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div
        className="list-group"
        style={{ paddingleft: "10px", border: "1.5px solid  #95A5A6" }}
      >
        <a
          href="/viewreport"
          className="card-header"
          style={{ WebkitTextFillColor: "black", backgroundColor: "#95A5A6" }}
        >
          patient options
        </a>

        <Link
          className="nav-link Active list-group-item list-group-item-action"
          to="/viewreport"
        >
          <b> View Your medical reports</b>
        </Link>
        <Link
          className="nav-link Active list-group-item list-group-item-action"
          to="/viewdoctors"
        >
          <b> Book doctor appointment</b>
        </Link>
        <Link
          className="nav-link Active list-group-item list-group-item-action"
          to="/viewappointment"
        >
          <b> view Your appointment</b>
        </Link>
        <Link
          className="nav-link Active list-group-item list-group-item-action"
          to="/selftest"
        >
          <b> Patient Self test</b>
        </Link>
      </div>
    );
  }
}

export default Sidebar;
