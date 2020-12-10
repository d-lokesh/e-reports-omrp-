import React, { Component } from "react";

import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import jwtDecode from "jwt-decode";
import { Route } from "react-router-dom";

import Navbar from "./components/common/navbar";
import FooterPage from "./components/common/fotter";
import register from "./components/auth/pregister";
import dregister from "./components/auth/dregisteraation";
import login from "./components/auth/login";
import logout from "./components/auth/logout";
import pdf from "./components/common/pdf2";
import viewreport from "./components/pmodules/viewreport";
import searchreport from "./components/doctor_modules/searchreport";
import addreport from "./components/doctor_modules/addreport";
import reportpdf from "./components/common/singlereport";
import reportfordpdf from "./components/common/singlereportd";
import viewdoctors from "./components/pmodules/doctors";
import samplepdf from "./components/common/samplepdf";
import flipcard from "./components/doctor_modules/dactorcardforrating";
import appointment from "./components/doctor_modules/appointment";
import applist from "./components/doctor_modules/allappford";
import viewappointment from "./components/pmodules/apphistory";
import catdoc from "./components/pmodules/catdoc";
import filterdoc from "./components/doctor_modules/filterdoc";
import predect from "./components/pmodules/predect";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      console.log("user", user);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <div className="App">
        <ToastContainer />

        <Navbar user={this.state.user} />
        <Route path="/Patientreg" component={register} />
        <Route path="/doctorreg" component={dregister} />
        <Route path="/login" component={login} />
        <Route path="/logout" component={logout} />
        <Route path="/viewreport" component={viewreport} />
        <Route path="/searchreport" component={searchreport} />
        <Route path="/addreport" component={addreport} />
        <Route path="/reportpdf" component={reportpdf} />
        <Route path="/samplepdf" component={samplepdf} />
        <Route path="/reportfordpdf" component={reportfordpdf} />
        <Route path="/pdf" component={pdf} />
        <Route path="/viewdoctors" component={viewdoctors} />
        <Route path="/flipcard" component={flipcard} />
        <Route path="/appointment" component={appointment} />
        <Route path="/viewappointmentdata" component={applist} />
        <Route path="/viewappointment" component={viewappointment} />
        <Route path="/catdoc" component={catdoc} />
        <Route path="/filterdoc" component={filterdoc} />
        <Route path="/selftest" component={predect} />

        <FooterPage></FooterPage>
      </div>
    );
  }
}

export default App;
