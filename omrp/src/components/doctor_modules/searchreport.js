import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dside from "../common/dside";
import jwtDecode from "jwt-decode";
import Slotcard from "../common//reportford";

import Axios from "axios";

class Verifycust extends Component {
  state = {
    data: null,
    data1: null,
    order: {
      omr: "",
    },
  };

  componentWillMount() {}

  handlechange = ({ currentTarget: input }) => {
    const order = { ...this.state.order };
    order[input.name] = input.value;
    this.setState({ order });
  };
  handleget = async (e) => {
    e.preventDefault();
    console.log(this.state);
    const omr = this.state.order.omr;

    const data1 = await Axios.post("http://localhost:3001/getreport", {
      omr: omr,
    });

    this.setState({ data1: data1.data });
    console.log(this.state.data1, "data1");
  };
  handlslot = async (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("token");
    const marchent = jwtDecode(jwt);

    const marchent_id = marchent._id;
    // const response = await order.searchorder(
    //   this.state.order.phno,
    //   marchent_id
    // );
    // this.setState({ data: response.data });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-3 card">
            <br />
            <Dside />
          </div>
          <div className="col-lg-9 card">
            <br />
            <div className="row" style={{ marginTop: "100 px" }}>
              <div className="col-lg-1"></div>

              <div className="col-lg-10">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="card"
                      style={{
                        textAlign: "left ",
                        border: "3px solid  #95A5A6",
                      }}
                    >
                      <h5
                        className="card-header"
                        style={{
                          textAlign: "center",
                          backgroundColor: "#95A5A6",
                        }}
                      >
                        Search Report
                      </h5>
                      <div className="card-body">
                        <form onSubmit={this.handlslot}>
                          <div className="form-group">
                            <label id="exampleInputEmail1">
                              Enter patient unique Id (OMRP NO.)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="omr"
                              value={this.state.order.omr}
                              onChange={this.handlechange}
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-dark"
                            onClick={this.handleget}
                            style={{
                              alignContent: "center",
                              backgroundColor: "#95A5A6",
                            }}
                          >
                            Get Reports
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg- 1"></div>
            </div>
            <br />
            <hr />
            <h5 style={{ color: "#757D75", textalign: "left" }}>
              Online Medical Report Data{" "}
            </h5>
            <hr />
            <div className="row" style={{ marginTop: "100 px" }}>
              <div className="col-lg-1"></div>

              <div className="col-lg-10">
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
                      Enter patient unique id to get patient medical reporsts -
                      Ex:OMRP7995830577{" "}
                    </h6>
                  </div>
                )}

                <hr />
              </div>
              <div className="col-lg- 1"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Verifycust;
