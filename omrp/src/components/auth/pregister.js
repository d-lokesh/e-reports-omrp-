import React, { Component } from "react";
import Input from "../common/input";
//import * as muserService from "../services/muserservice";
import { toast } from "react-toastify";
import Sidebar from "../common/sidebar";

import axios from "axios";

class Regmuser extends Component {
  state = {
    account: {
      pname: "",
      age: "",
      gender: "",
      phone: "",
      email: "",
      pass: "",
    },
  };

  handlechange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleregister = async (e) => {
    e.preventDefault();

    console.log(this.state.account);

    const response = await axios.post(
      "http://localhost:3001/preg",
      this.state.account
    );
    console.log(response, "response");
    localStorage.setItem("token", response.headers["x-auth-token"]);
    console.log(response);
    if (response) {
      toast(" Registered sucsessfully ");
    }
    // this.props.history.push("/nearstore");
    //  window.location = "/verifycust";
    window.location = "/viewreport";
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-3 card">
            <br />
            <Sidebar />
          </div>
          <div className="col-lg-9 card">
            <br />
            <div className="row" style={{ marginTop: "100 px" }}>
              <div className="col-lg-3"></div>
              <div className="col-lg-6">
                <div
                  className="card"
                  style={{ textAlign: "left ", border: "2px solid  #9ea8a3" }}
                >
                  <h5 className="card-header" style={{ textAlign: "center" }}>
                    Patient SignUp
                  </h5>
                  <div className="card-body">
                    <form onSubmit={this.handleregister}>
                      <Input
                        name="pname"
                        value={this.state.account.pname}
                        place="Patient name"
                        onChange={this.handlechange}
                      ></Input>

                      <Input
                        name="age"
                        value={this.state.account.age}
                        place="Age"
                        onChange={this.handlechange}
                      ></Input>

                      <div className="form-group">
                        <select
                          className="form-control "
                          type="text"
                          name="gender"
                          onChange={this.handlechange}
                        >
                          <option>Select Gender</option>
                          <option>Male</option>

                          <option>Female</option>

                          <option>Other</option>
                        </select>
                      </div>

                      <Input
                        name="phone"
                        value={this.state.account.phone}
                        place="Phone number"
                        onChange={this.handlechange}
                      ></Input>

                      <Input
                        name="email"
                        value={this.state.account.email}
                        place="Emil Address"
                        onChange={this.handlechange}
                      ></Input>

                      <Input
                        name="pass"
                        type="password"
                        class="form-control"
                        value={this.state.account.pass}
                        place="Password"
                        onChange={this.handlechange}
                      ></Input>

                      <button
                        type="submit"
                        className="btn btn-dark"
                        style={{
                          marginLeft: "45%",
                        }}
                      >
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg- 3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Regmuser;
