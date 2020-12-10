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
          href="/searchreport"
          className="card-header"
          style={{ WebkitTextFillColor: "black", background: "#95A5A6" }}
        >
          Doctor options
        </a>

        <Link
          className="nav-link Active list-group-item list-group-item-action"
          to="/searchreport"
        >
          <b> Search and view patient report</b>
        </Link>
        <Link
          className="nav-link Active list-group-item list-group-item-action"
          to="/addreport"
        >
          <b> Add patient report</b>
        </Link>
        <Link
          className="nav-link Active list-group-item list-group-item-action"
          to="/viewappointmentdata"
        >
          <b> View appointment</b>
        </Link>
      </div>
    );
  }
}

export default Sidebar;
