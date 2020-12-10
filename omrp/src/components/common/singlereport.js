import React, { Component } from "react";
import jsPDF from "jspdf";

import Psidebar from "../common/pside";

class conformslot extends Component {
  state = {
    data: null,
    user: null,
  };

  handlepdf = () => {
    var doc = new jsPDF("p", "pt");

    doc.text(
      175,
      40,
      "HOSPITAL NAME :" + this.state.data.hospital.toString() + " hospitals"
    );
    doc.text(
      20,
      60,
      "-------------------------------------------------------------------------------------------------------"
    );
    doc.text(30, 80, "Date & time :  " + this.state.data.date);
    doc.text(30, 100, "Place :  " + this.state.data.city.toString());
    doc.text(
      20,
      120,
      "-------------------------------------------------------------------------------------------------------"
    );
    doc.text(30, 140, "PATIENT DETAILS :  ");
    doc.text(
      30,
      170,
      "Patient name: " +
        this.state.data.patientname.toString() +
        "       " +
        "Patient gender: " +
        this.state.data.gender.toString() +
        "       " +
        "Patient DOB: " +
        this.state.data.dob.toString()
    );
    doc.text(
      30,
      200,
      "Patient OMRP no: " +
        "                " +
        "Patient height: " +
        this.state.data.height.toString() +
        "              " +
        "Patient weight: " +
        this.state.data.weight.toString()
    );
    doc.text(30, 220, this.state.data.omrp.toString());
    doc.text(
      20,
      240,
      "-------------------------------------------------------------------------------------------------------"
    );
    doc.text(30, 260, "HEALTH DETAILS :  ");
    doc.text(
      30,
      290,
      "Health issues : " + this.state.data.healthproblem.toString()
    );
    var dia = this.state.data.diabetes ? "Diabetis : YES" : "Diabetis : NO";
    doc.text(40, 320, " " + dia);
    var ml = this.state.data.malaria ? "Malaria : YES" : "Malaria : NO";

    doc.text(220, 320, " " + ml);
    var bp = this.state.data.bp
      ? "Blood pressure : YES"
      : "Blood pressure : NO";

    doc.text(390, 320, " " + bp);
    var heartdisease = this.state.data.heartdisease
      ? "heartdisease: AbNormal"
      : "heartdisease: Normal";

    doc.text(40, 350, " " + heartdisease);
    var liverfunction = this.state.data.liverfunction
      ? "liverfunction: AbNormal"
      : "liverfunction : Normal";

    doc.text(220, 350, " " + liverfunction);
    var nephralgia = this.state.data.nephralgia
      ? "nephralgia : AbNormal"
      : "nephralgia : Normal";

    doc.text(390, 350, " " + nephralgia);
    var cerebraldesease = this.state.data.cerebraldesease
      ? "cerebraldesease : AbNormal"
      : "cerebraldesease : Normal";

    doc.text(40, 380, " " + cerebraldesease);
    var skindisease = this.state.data.skindisease
      ? "skindisease : AbNormal"
      : "skindisease : Normal";

    doc.text(300, 380, " " + skindisease);

    doc.text(
      20,
      400,
      "-------------------------------------------------------------------------------------------------------"
    );
    doc.text(30, 420, "MEDICINE DETAILS :  ");
    doc.text(
      30,
      450,
      "Medicine: " +
        this.state.data.medicine.toString() +
        "         " +
        "Medicine Duration: " +
        this.state.data.medicineduration.toString()
    );
    doc.text(
      20,
      470,
      "-------------------------------------------------------------------------------------------------------"
    );
    doc.text(30, 490, "HOSPITAL DETAILS :  ");
    doc.text(
      30,
      520,
      "Hospital name: " +
        this.state.data.hospital.toString() +
        "         " +
        "Doctor name: " +
        this.state.data.doctor.toString()
    );
    doc.text(
      20,
      540,
      "-------------------------------------------------------------------------------------------------------"
    );
    var pname = this.state.data.patientname.toString() + "_medical report";
    doc.save(pname + ".pdf");
  };

  componentWillMount() {
    this.do();
  }
  do = async () => {
    const data = this.props.location.state.data;

    try {
      if (data.diabetes) {
        data["diabetes"] = "diabetes";
      }
      if (data.malaria) {
        data["malaria"] = "malaria";
      }
      if (data.bp) {
        data["bp"] = "bp";
      }
      if (data.heartdisease) {
        data["heartdisease"] = "heartdisease";
      }
      if (data.liverfunction) {
        data["liverfunction"] = "liverfunction";
      }
      if (data.nephralgia) {
        data["nephralgia"] = "nephralgia";
      }
      if (data.cerebraldesease) {
        data["cerebraldesease"] = "cerebraldesease";
      }
      if (data.skindisease) {
        data["skindisease"] = "skindisease";
      }
    } catch {}

    await this.setState({ ...this.state.data, data });
    console.log(this.state.data, "data");
  };

  handlechange = () => {};
  conformslot = async (e) => {};
  cancleslot = async () => {};
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-3 card">
            <br />
            <Psidebar />
          </div>
          <div className="col-lg-9 ">
            <div className="card">
              <hr />

              <div className="row" style={{ marginTop: "100 px" }}>
                <div className="col-lg-1"></div>

                <div className="col-lg-10">
                  <div>
                    <div
                      key={this.state.data._id}
                      className="card"
                      style={{
                        textAlign: "left ",
                        border: "4px solid #95A5A6",
                      }}
                    >
                      <h5
                        className="card-header"
                        style={{
                          textAlign: "center",
                          backgroundColor: "#95A5A6",
                        }}
                      >
                        <p>
                          Medical Report From {this.state.data.hospital}{" "}
                          Hospitals
                        </p>
                      </h5>
                      <div className="card-body">
                        <h6 style={{ textAlign: "center" }}>
                          {this.state.data.hospital},
                        </h6>
                        <h6 style={{ textAlign: "center" }}>
                          {this.state.data.city}.
                        </h6>{" "}
                        <hr />
                        <div className="row">
                          <div className="col-lg-12">
                            <br />
                            <h6>
                              Date & Time :{" "}
                              {this.state.data.date.toString().substring(0, 25)}
                            </h6>
                            <h6>Place : {this.state.data.city}</h6>
                            <br />
                            <h5>Patient Details</h5>
                            <hr />
                            <div className="row">
                              <hr />
                              <div className="col-md-4">
                                {" "}
                                <h6>
                                  Patient Name : {this.state.data.patientname}{" "}
                                </h6>
                                <br />
                                <h6>
                                  {" "}
                                  Patient OMRP no : {this.state.data.omrp}{" "}
                                </h6>
                              </div>
                              <div className="col-md-4">
                                <h6>
                                  Patient Gender : {this.state.data.gender}
                                </h6>
                                <br />
                                <h6>
                                  Patient Height : {this.state.data.height} CM
                                </h6>
                              </div>
                              <div className="col-md-4">
                                <h6>Patient DOB : {this.state.data.dob}</h6>
                                <br />
                                <h6>
                                  Patient Weaight : {this.state.data.weight} KG
                                </h6>
                              </div>
                            </div>
                            <hr />
                            <br />
                            <h5>Health Details</h5>
                            <hr />{" "}
                            <h6>
                              Health issues : {this.state.data.healthproblem}
                            </h6>
                            <br />
                            <div className="row">
                              <div className="col-md-4">
                                <h6>
                                  diabetes :{" "}
                                  {this.state.data.diabetes ? " Yes" : "No"}
                                </h6>
                                <br />
                                <h6>
                                  heartdisease :{" "}
                                  {this.state.data.heartdisease
                                    ? " Abnormal"
                                    : "Normal"}
                                </h6>
                                <br />
                                <h6>
                                  cerebraldesease :{" "}
                                  {this.state.data.cerebraldesease
                                    ? " Abnormal"
                                    : "Normal"}
                                </h6>
                              </div>
                              <div className="col-md-4">
                                <h6>
                                  malaria :{" "}
                                  {this.state.data.malaria ? " Yes" : "No"}
                                </h6>
                                <br />
                                <h6>
                                  liverfunction :{" "}
                                  {this.state.data.liverfunction
                                    ? " Abnormal"
                                    : "Normal"}
                                </h6>
                                <br />
                                <h6>
                                  skindisease :{" "}
                                  {this.state.data.skindisease ? " Yes" : "No"}
                                </h6>
                              </div>
                              <div className="col-md-4">
                                <h6>
                                  Blood pressure :{" "}
                                  {this.state.data.bp ? " Abnormal" : "Normal"}
                                </h6>
                                <br />
                                <h6>
                                  cerebraldesease :{" "}
                                  {this.state.data.cerebraldesease
                                    ? " Abnormal"
                                    : "Normal"}
                                </h6>
                              </div>
                            </div>
                            <hr />
                            <br />
                            <h5>Medicine Details</h5>
                            <hr />
                            <div className="row">
                              <div className="col-md-6">
                                <h6>Medicine : {this.state.data.medicine}</h6>
                              </div>
                              <div className="col-md-6">
                                <h6>
                                  Medicine Duration :{" "}
                                  {this.state.data.medicineduration}
                                </h6>
                              </div>
                            </div>
                            <hr />
                            <br />
                            <h5>Hopital Details</h5>
                            <hr />
                            <div className="row">
                              <div className="col-md-6">
                                <h6>
                                  Hospital Name : {this.state.data.hospital}{" "}
                                  hospitals
                                </h6>
                              </div>
                              <div className="col-md-4">
                                <h6>
                                  {" "}
                                  Doctor Name : Dr {this.state.data.doctor}{" "}
                                </h6>
                              </div>

                              <div className="col-md-4"></div>
                            </div>
                            <hr />
                            <br />
                            <h6>
                              <bold>
                                click below button to download your report in
                                pdf formate :
                              </bold>
                            </h6>
                            <div className="row">
                              <div className="col-md-4"></div>
                              <div className="col-md-4">
                                <button
                                  className="btn"
                                  style={{
                                    color: "black",
                                    border: "1px solid black",
                                  }}
                                  onClick={this.handlepdf}
                                >
                                  download Pdf
                                </button>
                              </div>

                              <div className="col-md-4"></div>
                            </div>
                          </div>
                          <hr />

                          <hr />
                        </div>
                        {/* <button
                          onClick={this.conformslot}
                          className="btn"
                          style={{
                            alignItems: "center",
                            color: "white",
                            textAlign: "right",
                            backgroundColor: "gray",
                          }}
                        >
                          confom slot
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg- 1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg- 1"></div>
      </div>
    );
  }
}

export default conformslot;
