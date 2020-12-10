import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
          <b>
            <a className="navbar-brand  " href="/">
              E-reports
            </a>
          </b>
          <button
            class="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            options
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link Active" to="/">
                  Home
                </Link>
              </li>
              {!this.props.user && (
                <React.Fragment>
                  <li className="nav-item active">
                    <Link className="nav-link Active" to="/Patientreg">
                      Register
                    </Link>
                  </li>

                  <li className="nav-item active">
                    <Link className="nav-link Active" to="/login">
                      Login
                    </Link>
                  </li>
                </React.Fragment>
              )}

              <li className="nav-item active">
                <Link className="nav-link Active" to="/help">
                  Help
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link Active" to="/contactus">
                  Contactus
                </Link>
              </li>
              {this.props.user && (
                <React.Fragment>
                  <li
                    style={{
                      alignContent: "auto",
                      marginLeft: "20px",
                      float: "right",
                      marginTop: "7px",
                    }}
                    className="nav-item active"
                  >
                    <span>Welcome</span> {this.props.user.name}
                  </li>

                  <li className="nav-item active">
                    <Link className="nav-link Active" to="/logout">
                      Logout
                    </Link>
                  </li>

                  <li className="nav-item active"></li>
                </React.Fragment>
              )}

              <li className="nav-item"></li>
              {/* <li className="nav-item">
              <a
                className="nav-link Active"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
