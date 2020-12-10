import React, { Component } from "react";
import Psidebar from "../common/pside";
import Slotcard from "../doctor_modules/appreating";
import jwtDecode from "jwt-decode";
import Axios from "axios";

class Viewreport extends Component {
  state = {
    data: null,
    data1: null,
    order: {
      phno: "",
    },
    value: "",
  };

  componentWillMount() {
    this.allorders();
  }

  allorders = async () => {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    const omr = user.omr;
    console.log(omr, "omr id");

    const data1 = await Axios.post("http://localhost:3001/getappbyp", {
      omr: omr,
    });
    console.log(data1, "res");
    await this.setState({ data1: data1.data });
    console.log(this.state.data1, "dtat");
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-3 card">
            <Psidebar />
          </div>
          <div className="col-lg-9 card">
            <br />
            <div className="row" style={{ marginTop: "100 px" }}>
              <div className="col-lg-11">
                <hr />
                <h5
                  style={{
                    color: "gray",

                    marginLeft: "1px",
                  }}
                >
                  Your Appointment Data
                </h5>
                <hr />
                <div className="row">
                  {" "}
                  {this.state.data1 ? (
                    <Slotcard slots={this.state.data1} />
                  ) : (
                    <div>
                      <h6
                        style={{
                          color: "#95A5A6",
                          textalign: "center",
                        }}
                      >
                        Loading all Your appointment history{" "}
                      </h6>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Viewreport;
