import React, { Component } from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import doctor from "./happydoctor.jpg";
import doctor2 from "./femaledoctor.jpg";
import Input from "../common/input";

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
        No doctors available right Now{" "}
      </h6>
    );
  } else {
    return slots.map((slot) => (
      <div>
        <div
          class="card"
          style={{
            width: "18rem",
            margin: "7px",
            marginLeft: "10px",
            border: "1px solid gray",
          }}
        >
          <img
            src={slot.gender === "Female" ? doctor2 : doctor}
            class="card-img-top"
            alt="..."
            width="80px"
            height="220px"
          />
          <div class="card-body" style={{ textAlign: "left" }}>
            <h5 class="card-title" style={{ textAlign: "center" }}>
              dr {slot.doctorname}
            </h5>

            <h6 class="card-text">Specialist in : {slot.sp}</h6>

            <h6 class="card-text">Hospital Name: {slot.hospitalname}</h6>

            <h6 class="card-text">Years of experiance : {slot.exp}</h6>
            <h6 class="card-text">consultation fee : {slot.fee}</h6>
            <h6 class="card-text">
              Timings : {slot.stime.toString().substring(11, 16)} To{" "}
              {slot.etime.toString().substring(11, 16)}
            </h6>

            <Link
              className="nav-link Active list-group-item list-group-item-action btn"
              to={{
                pathname: "/appointment",
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
                <b> Book appointment</b>
              </h6>
            </Link>
          </div>
        </div>
      </div>
    ));
  }
};

export default orderdata;
