import React, { Component } from "react";
import doctor2 from "./femaledoctor.jpg";
import DatePicker from "react-datepicker";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";
import doctor from "./happydoctor.jpg";

import Input from "../common/input";
import Axios from "axios";

class Appointment extends Component {
  state = {
    slot: null,
    user: null,
    Date: "",
    time: "10:00",
    data: {
      pname: "",
      gender: "",
      date: "",
      age: "",
      healthproblem: "",
      phno: "",
    },
  };

  componentWillMount() {
    this.do();
  }
  do = async () => {
    const slot = this.props.location.state.data;

    await this.setState({ ...this.state.slot, slot });
    console.log(this.state.slot, "data doctor");
  };
  handlechange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };

    data[input.name] = input.value;
    this.setState({ data });
    //console.log(store);
  };
  handletChange = async (date) => {
    const Date = date;
    await this.setState({ Date });
    console.log(this.state.Date, "date");
  };
  handlesubmit = (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    const data = this.props.location.state.data;

    console.log(this.state.data, this.state.Date);
    const res = Axios.post("http://localhost:3001/addapp", {
      age: this.state.data.age,
      date: this.state.Date,
      gender: data.gender,
      healthproblem: this.state.data.healthproblem,
      phno: this.state.data.phno,
      pname: this.state.data.pname,
      omr: user.omr,
      did: data._id,
      fee: data.fee,
      hospitalname: data.hospitalname,
      sp: data.sp,
      dname: data.doctorname,
    });
    if (res) {
      toast(" Your Appointment booked  ");
      this.props.history.push("/viewappointment");
    }
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            <div
              class="card"
              style={{
                width: "18rem",
                margin: "10px",
                marginLeft: "20px",
                border: "1px solid gray",
              }}
            >
              <img
                src={this.state.slot.gender === "Female" ? doctor2 : doctor}
                class="card-img-top"
                alt="..."
                width="80px"
                height="220px"
              />
              <div class="card-body" style={{ textAlign: "left" }}>
                <h5 class="card-title" style={{ textAlign: "center" }}>
                  dr {this.state.slot.doctorname}
                </h5>
                <h6 class="card-text">Specialist in : {this.state.slot.sp}</h6>

                <h6 class="card-text">
                  Hospital Name: {this.state.slot.hospitalname}
                </h6>

                <h6 class="card-text">
                  Years of experiance : {this.state.slot.exp}
                </h6>
                <h6 class="card-text">
                  consultation fee : {this.state.slot.fee}
                </h6>
                <h6 class="card-text">
                  Timings : {this.state.slot.stime.toString().substring(11, 16)}{" "}
                  To {this.state.slot.etime.toString().substring(11, 16)}
                </h6>
                <h6 class="card-text">
                  Doctor Rating : {this.state.slot.rating} stars
                </h6>
                <h6 class="card-text">Email : {this.state.slot.email}</h6>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <br />
            <div
              className="card"
              style={{ textAlign: "left ", border: "4px solid  #95A5A6" }}
            >
              <h5
                className="card-header"
                style={{ textAlign: "center", backgroundColor: "#95A5A6" }}
              >
                Book Your Appointment
              </h5>
              <div className="card-body">
                <form onSubmit={this.handlesubmit}>
                  <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-lg-4">
                      <Input
                        autoFocus
                        name="pname"
                        value={this.state.data.pname}
                        lable="Patient Name"
                        onChange={this.handlechange}
                      ></Input>
                      <div className="form-group">
                        <label htmlFor="">Gender</label>
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
                        autoFocus
                        name="age"
                        value={this.state.data.age}
                        lable="Age"
                        onChange={this.handlechange}
                      ></Input>
                    </div>
                    <div className="col-lg-5">
                      <div class="form-group">
                        <label>Select Time slot</label>
                        <br />

                        <DatePicker
                          value={this.state.Date}
                          selected={this.state.Date}
                          onChange={this.handletChange}
                          locale="es"
                          showTimeSelect
                          dateFormat="Pp"
                        />
                      </div>
                      <Input
                        autoFocus
                        name="phno"
                        value={this.state.data.phno}
                        lable="Contact no"
                        onChange={this.handlechange}
                      ></Input>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">
                          Health problem:
                        </label>
                        <textarea
                          name="healthproblem"
                          class="form-control"
                          value={this.state.data.healthproblem}
                          onChange={this.handlechange}
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-2"></div>
                    <button
                      type="submit"
                      className="btn btn-dark"
                      style={{
                        marginLeft: "38%",
                        backgroundColor: "#95A5A6",
                      }}
                    >
                      Book Appointment{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
