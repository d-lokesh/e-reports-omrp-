import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../common/input";
//import * as marchent from "../services/marchent";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import Dside from "../common/dside";
import Axios from "axios";

class Addstore extends Component {
  state = {
    store: {
      patientname: "",
      gender: "",
      dob: "",
      age: "",
      city: "",
      omrp: "",
      weight: "",
      height: "",
      healthproblem: "",
      medicine: "",
      medicineduration: "",
      hospital: "",
      date: "",
      doctor: "",
      nurse: "",
      email: "",
      phno: "",
    },
  };

  handlecheck = async ({ currentTarget: input }) => {
    const store = { ...this.state.store };

    if (store[input.name] === input.name) {
      delete store[input.name];
    } else {
      store[input.name] = input.name;
    }
    await this.setState({ store });
  };

  handlechange = ({ currentTarget: input }) => {
    const store = { ...this.state.store };

    store[input.name] = input.value;
    this.setState({ store });
    //console.log(store);
  };
  handlesubmit = async (e) => {
    e.preventDefault();

    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);

    const id = user._id;

    console.log(this.state.store);
    // user = this.user;

    const response = await Axios.post(
      "http://localhost:3001/addreport",
      this.state.store
    );
    console.log(response);
    // if (response) {
    //   toast("store added successfully");
    // }

    // this.props.history.push("/storedetails");
  };
  render() {
    return (
      <div className="row">
        <div className="col-lg-3 card">
          <br />
          <Dside />
        </div>
        <div className="col-lg-9 card">
          <br />

          <div
            className="card"
            style={{ textAlign: "left ", border: "4px solid  #95A5A6" }}
          >
            <h5
              className="card-header"
              style={{ textAlign: "center", backgroundColor: "#95A5A6" }}
            >
              Add patient Report
            </h5>
            <div className="card-body">
              <form onSubmit={this.handlesubmit}>
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-4">
                    <Input
                      autoFocus
                      name="patientname"
                      value={this.state.store.patientname}
                      lable="Patient Name"
                      onChange={this.handlechange}
                    ></Input>
                    <Input
                      autoFocus
                      name="email"
                      value={this.state.store.email}
                      lable="Email Id"
                      onChange={this.handlechange}
                    ></Input>

                    <Input
                      autoFocus
                      name="dob"
                      value={this.state.store.dob}
                      lable="patient dob"
                      onChange={this.handlechange}
                      place="dd/mm/yyyy"
                    ></Input>

                    <Input
                      autoFocus
                      name="city"
                      value={this.state.store.city}
                      lable="patient city"
                      onChange={this.handlechange}
                    ></Input>

                    <Input
                      autoFocus
                      name="weight"
                      value={this.state.store.weight}
                      lable="Patient Weight"
                      onChange={this.handlechange}
                      place="ex:45 kg"
                    ></Input>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            name="diabetes"
                            className="form-check-input lg"
                            id="myCheck"
                            value={this.state.store.diabetes}
                            onChange={this.handlecheck}
                          />
                          <label
                            className="form-check-label"
                            id="exampleCheck1"
                          >
                            diabetes
                          </label>
                        </div>
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            name="malaria"
                            className="form-check-input lg"
                            id="myCheck"
                            value={this.state.store.malaria}
                            onChange={this.handlecheck}
                          />
                          <label
                            className="form-check-label"
                            id="exampleCheck1"
                          >
                            Malaria
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            name="bp"
                            className="form-check-input lg"
                            id="myCheck"
                            value={this.state.store.bp}
                            onChange={this.handlecheck}
                          />
                          <label
                            className="form-check-label"
                            id="exampleCheck1"
                          >
                            Blood pressure
                          </label>
                        </div>
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            name="heartdisease"
                            className="form-check-input lg"
                            id="myCheck"
                            value={this.state.store.heartdisease}
                            onChange={this.handlecheck}
                          />
                          <label
                            className="form-check-label"
                            id="exampleCheck1"
                          >
                            heart disease
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Health problem:
                      </label>
                      <textarea
                        name="healthproblem"
                        class="form-control"
                        value={this.state.store.healthproblem}
                        onChange={this.handlechange}
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <Input
                      autoFocus
                      name="medicineduration"
                      value={this.state.store.medicineduration}
                      lable="Medicine duration"
                      onChange={this.handlechange}
                    ></Input>
                    <Input
                      autoFocus
                      name="nurse"
                      value={this.state.store.nurse}
                      lable="nurse name"
                      onChange={this.handlechange}
                    ></Input>
                  </div>
                  <div className="col-lg-4">
                    <Input
                      autoFocus
                      name="omrp"
                      value={this.state.store.omrp}
                      lable="patient Id (OMRP ID)"
                      onChange={this.handlechange}
                    ></Input>
                    <Input
                      autoFocus
                      name="phno"
                      value={this.state.store.phno}
                      lable="ph no"
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
                      name="age"
                      value={this.state.store.age}
                      lable="patient age"
                      onChange={this.handlechange}
                    ></Input>

                    <Input
                      autoFocus
                      name="height"
                      value={this.state.store.height}
                      lable="patinet height"
                      onChange={this.handlechange}
                      place="ex:160 cm"
                    ></Input>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            name="liverfunction"
                            className="form-check-input lg"
                            id="myCheck"
                            value={this.state.store.liverfunction}
                            onChange={this.handlecheck}
                          />
                          <label
                            className="form-check-label"
                            id="exampleCheck1"
                          >
                            LiverFunction
                          </label>
                        </div>
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            name="nephralgia"
                            className="form-check-input lg"
                            id="myCheck"
                            value={this.state.store.nephralgia}
                            onChange={this.handlecheck}
                          />
                          <label
                            className="form-check-label"
                            id="exampleCheck1"
                          >
                            nephralgia{" "}
                          </label>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            name="cerebraldesease"
                            className="form-check-input lg"
                            id="myCheck"
                            value={this.state.store.cerebraldesease}
                            onChange={this.handlecheck}
                          />
                          <label
                            className="form-check-label"
                            id="exampleCheck1"
                          >
                            cerebral desease
                          </label>
                        </div>
                        <div className="form-group form-check">
                          <input
                            type="checkbox"
                            name="skindisease"
                            className="form-check-input lg"
                            id="myCheck"
                            value={this.state.store.skindisease}
                            onChange={this.handlecheck}
                          />
                          <label
                            className="form-check-label"
                            id="exampleCheck1"
                          >
                            Skin disease
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Medicine used
                      </label>
                      <textarea
                        name="medicine"
                        class="form-control"
                        value={this.state.store.medicine}
                        onChange={this.handlechange}
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <Input
                      autoFocus
                      name="doctor"
                      value={this.state.store.doctor}
                      lable="Doctor name"
                      onChange={this.handlechange}
                    ></Input>

                    <Input
                      autoFocus
                      name="hospital"
                      value={this.state.store.hospital}
                      lable="hospital name"
                      onChange={this.handlechange}
                    ></Input>
                  </div>
                  <div className="col-lg-2"></div>
                  <button
                    type="submit"
                    className="btn btn-dark"
                    style={{
                      marginLeft: "45%",
                      backgroundColor: "#95A5A6",
                    }}
                  >
                    Add Report
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Addstore;
