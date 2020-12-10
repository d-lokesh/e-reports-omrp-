import React, { Component } from "react";
import Input from "../common/input";
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "../common/sidebar";
//import TimePicker from "react-time-picker";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

class Dreg extends Component {
  state = {
    account: {
      doctorname: "",
      sp: "",
      exp: "",
      hospitalname: "",
      phone: "",
      email: "",
      pass: "",
      etime: "",
      stime: "",
      gender: "",
      fee: "",
      rating: 4,
      rcount: 1,
    },
    stime: "",
    etime: "",
  };

  onChange = (stime) => {
    var account = { ...this.state.account };
    account["stime"] = stime;
    this.setState({ account });
  };
  onChangee = (etime) => {
    var account = { ...this.state.account };
    account["etime"] = etime;
    this.setState({ account });
    console.log(account);
  };

  handlechange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
    console.log(this.state.account);
  };

  handleregister = async (e) => {
    e.preventDefault();

    console.log(this.state.account);

    const response = await axios.post(
      "http://localhost:3001/dreg",
      this.state.account
    );

    localStorage.setItem("token", response.headers["x-auth-token"]);
    console.log(response);
    if (response) {
      toast(" Registered sucsessfully ");
    }
    // this.props.history.push("/nearstore");
    window.location = "/searchreport";
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
                    Doctor SignUp
                  </h5>
                  <div className="card-body">
                    <form onSubmit={this.handleregister}>
                      <Input
                        name="doctorname"
                        value={this.state.account.doctorname}
                        // lable="Doctor name"
                        onChange={this.handlechange}
                        place="Doctor name"
                      ></Input>

                      <div className="form-group">
                        <select
                          className="form-control "
                          type="text"
                          name="sp"
                          onChange={this.handlechange}
                        >
                          <option>Select Specialisation</option>
                          <option>Anesthesiologists</option>
                          <option>Cardiologists</option>
                          <option>Dermatologists</option>
                          <option>Endocrinologists</option>
                          <option>Emergency Medicine Specialists</option>
                          <option>Family Physicians</option>
                          <option>Nephrologists</option>
                          <option>Neurologists</option>
                          <option>Psychiatrist</option>
                          <option>Surgeon</option>
                        </select>
                      </div>
                      <Input
                        name="exp"
                        value={this.state.account.exp}
                        place="years of Experiance"
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
                        name="hospitalname"
                        value={this.state.account.hospitalname}
                        place="hospital you are working for"
                        onChange={this.handlechange}
                      ></Input>
                      <div className="row">
                        <div className="col-md-6">
                          {" "}
                          <label htmlFor="">start time</label>
                          <div>
                            <TimePicker
                              onChange={this.onChange}
                              value={this.state.account.stime}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          {" "}
                          <label htmlFor="">end time</label>
                          <div>
                            <TimePicker
                              onChange={this.onChangee}
                              value={this.state.account.etime}
                            />
                          </div>
                        </div>
                      </div>

                      <Input
                        name="fee"
                        value={this.state.account.fee}
                        place="Fee per appointment"
                        onChange={this.handlechange}
                      ></Input>

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
                        type="password"
                        class="form-control"
                        name="pass"
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

export default Dreg;
