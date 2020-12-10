import React, { Component } from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
//import userlogo from "../marchentpages/sam.png";

const orderdata = ({ slots }) => {
  if (slots.length === 0) {
    return (
      <h6
        style={{
          color: "gray",
          textalign: "center",
        }}
      >
        No medical report avilable for entered patient id{" "}
      </h6>
    );
  } else {
    return slots.map((slot) => (
      <div className="card">
        <br />
        <div className="row" style={{ marginTop: "100 px" }}>
          <div className="col-lg-12">
            <div>
              <div
                key={slot._id}
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
                    Medical report on :- {slot.date.toString().substring(0, 25)}
                  </p>
                </h5>
                <div className="card-body">
                  <div className="row">
                    {/* <div className="col-lg-3">
                      <img width="100%" height="100%" src={userlogo} alt="" />
                    </div> */}

                    <div className="col-lg-4">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <b>Patient Name :</b>
                          <span
                            style={{
                              textalign: "right",
                            }}
                          >
                            {" "}
                            {slot.patientname}
                          </span>
                        </li>
                        <li class="list-group-item">
                          <b>Gender :</b>
                          <span
                            style={{
                              textalign: "right",
                            }}
                          >
                            {" "}
                            {slot.gender}
                          </span>
                        </li>
                        <li class="list-group-item">
                          <b>Age:</b>
                          <span
                            style={{
                              textalign: "right",
                            }}
                          >
                            {" "}
                            {slot.age}
                          </span>
                        </li>

                        {/* <li class="list-group-item">
                          <b>Address:</b>
                          <span
                            style={{
                              textalign: "right",
                            }}
                          >
                            {" "}
                            {slot.address}
                          </span>
                        </li> */}
                      </ul>
                    </div>
                    <div className="col-lg-5">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <b>Your OMRP ID :</b>
                          <span
                            style={{
                              textalign: "right",
                            }}
                          >
                            {" "}
                            {slot.omrp}
                          </span>
                        </li>
                        <li class="list-group-item">
                          <b>healthproblem</b>
                          <span
                            style={{
                              textalign: "right",
                            }}
                          >
                            {" "}
                            {slot.healthproblem}
                          </span>
                        </li>
                        <li class="list-group-item">
                          <b>Hospital name</b>
                          <span
                            style={{
                              textalign: "right",
                            }}
                          >
                            {" "}
                            {slot.hospital}
                          </span>
                        </li>

                        {/* <li class="list-group-item">
                          <b>Email</b>
                          <span
                            style={{
                              textalign: "right",
                            }}
                          >
                            {" "}
                            {slot.email}
                          </span>
                        </li> */}
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <Link
                        className="nav-link Active list-group-item list-group-item-action btn"
                        to={{
                          pathname: "/reportfordpdf",
                          state: {
                            data: slot,
                          },
                        }}
                        style={{
                          color: "gray",
                          alignContent: "center",
                          textAlign: "center",
                          marginTop: "25px",
                        }}
                      >
                        <h6>
                          {" "}
                          <b>View full medical report</b>
                        </h6>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }
};

export default orderdata;
