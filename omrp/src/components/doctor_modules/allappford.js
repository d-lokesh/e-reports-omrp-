import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dside from "../common/dside";
import jwtDecode from "jwt-decode";
import Slotcard from "../doctor_modules/appcard";

import Axios from "axios";

class Verifycust extends Component {
  state = {
    data: null,
    data1: null,
    order: {
      omr: "",
    },
  };

  componentWillMount() {
    this.do();
  }

  do = async () => {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    console.log(user, "userdata");
    const data1 = await Axios.post("http://localhost:3001/getapp", {
      did: user._id,
    });

    this.setState({ data1: data1.data });
    console.log(this.state.data1, "data");
  };

  handlechange = ({ currentTarget: input }) => {
    const order = { ...this.state.order };
    order[input.name] = input.value;
    this.setState({ order });
  };
  handleget = async (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    console.log(user, "userdata");
    const data1 = await Axios.post("http://localhost:3001/getapp", {
      did: user._id,
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
            <hr />
            <h5 style={{ color: "#757D75", textalign: "left" }}>
              Your Appointments{" "}
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
                      Loading Your Appointments
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
