import React, { Component } from "react";
import { Link } from "react-router-dom";

import Input from "../common/input";
import { login } from "../services/auth";
import { toast } from "react-toastify";

import log from "./loglog.png";
class Login extends Component {
  state = {
    account: {
      email: "",
      password: "",
      ism: 0,
    },
  };

  handlechange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };

    account[input.name] = input.value;

    this.setState({ account });
  };
  handlecheck = () => {
    const account = { ...this.state.account };

    if (account.ism === 0) {
      account.ism = 1;
    } else {
      account.ism = 0;
    }
    this.setState({ account });
  };

  handlelogin = async (e) => {
    e.preventDefault();

    // console.log(this.state.account);
    const { account } = this.state;

    const { data: jwt } = await login(
      account.email,
      account.password,
      account.ism
    );
    console.log(jwt, "jwt");
    localStorage.setItem("token", jwt);
    // this.props.history.push("/nearstore");
    if (account.ism === 1) {
      window.location = "/searchreport";
      toast("Login sucsess");
    } else {
      window.location = "/viewreport";
      toast("Login sucsess");
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-4"></div>

          <div className="col-lg-4" style={{ marginTop: "50px" }}>
            <div
              className="card "
              style={{ textAlign: "left ", border: "2px solid  #9ea8a3" }}
            >
              <h5 className="card-header" style={{ textAlign: "center" }}>
                LogIn
              </h5>
              <div className="card-body ">
                <img
                  src={log}
                  alt=""
                  width="200px "
                  height="200"
                  style={{ marginLeft: "30% " }}
                />

                <form onSubmit={this.handlelogin}>
                  <Input
                    autoFocus
                    name="email"
                    value={this.state.account.email}
                    lable="Email"
                    onChange={this.handlechange}
                  ></Input>
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      value={this.state.account.password}
                      lable="password"
                      onChange={this.handlechange}
                    />
                  </div>

                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      name="ism"
                      className="form-check-input lg"
                      id="myCheck"
                      value={this.state.account.ism}
                      onChange={this.handlecheck}
                    />
                    <label className="form-check-label" id="exampleCheck1">
                      Login as Doctor
                    </label>
                  </div>
                  <Link className="" to="/userreg">
                    New user Signup ?{" "}
                  </Link>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-dark"
                    style={{ marginLeft: "45%" }}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-4"></div>
        </div>
      </div>
    );
  }
}

export default Login;
