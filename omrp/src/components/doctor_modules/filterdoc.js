import React, { Component } from "react";
import Psidebar from "../common/pside";
import Slotcard from "../doctor_modules/doctorcard";
import jwtDecode from "jwt-decode";
import Axios from "axios";
import { Route, Switch, NavLink, Link } from "react-router-dom";

class Viewreport extends Component {
  state = {
    data: null,
    data1: null,
    order: {
      phno: "",
    },
    allflag: 1,
    cat: 0,
  };

  changeall = () => {
    var allflag = { ...this.state.allflag };
    var cat = { ...this.state.cat };
    if (allflag === 0) {
      allflag = 1;
      cat = 0;
    }

    this.setState({ allflag, cat });
  };

  changecat = () => {
    var allflag = { ...this.state.allflag };
    var cat = { ...this.state.cat };
    if (cat === 0) {
      allflag = 0;
      cat = 1;
    }

    this.setState({ allflag, cat });
  };

  componentWillMount() {
    this.allorders();
  }

  allorders = async () => {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    const omr = user.omr;

    const data = await Axios.post("http://localhost:3001/getdoctors");
    console.log(data1);
    const sp = this.props.location.state.data;
    var data1 = [];
    for (const i in data.data) {
      if (data.data[i].sp.toLowerCase() === sp.toLowerCase()) {
        data1.push(data.data[i]);
      }
    }

    if (data1.length > 0) {
      await this.setState({ data1: data1 });
    }
    console.log(this.state.data1, "data1");
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-3 card">
            <br />
            <Psidebar />
          </div>
          <div className="col-lg-9 card">
            <br />
            <div className="row">
              <div className="col-md-3">
                <Link
                  className="  btn btn-outline-secondary"
                  to={{
                    pathname: "/viewdoctors",
                    /* state: {
                  data: slot,
                }, */
                  }}
                  style={{
                    alignContent: "center",
                    textAlign: "center",
                  }}
                >
                  <h6>
                    {" "}
                    <b> view all doctors</b>
                  </h6>
                </Link>
              </div>
              <div className="col-md-3">
                <Link
                  className="  btn btn-outline-secondary"
                  to={{
                    pathname: "/catdoc",
                    /* state: {
                  data: slot,
                }, */
                  }}
                  style={{
                    alignContent: "center",
                    textAlign: "center",
                  }}
                >
                  <h6>
                    {" "}
                    <b> view by category</b>
                  </h6>
                </Link>
              </div>
            </div>
            <hr />

            <div className="row">
              {this.state.data1 ? (
                <Slotcard slots={this.state.data1} />
              ) : (
                <div>
                  <h6
                    style={{
                      color: "#95A5A6",
                      textAlign: "center",
                    }}
                  >
                    No {this.props.location.state.data} availble right now{" "}
                  </h6>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Viewreport;
