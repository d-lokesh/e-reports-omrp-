import React, { Component } from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import doctor from "./patient.png";
import doc from "./doc.png";
import doctor2 from "./femaledoctor.jpg";
import Input from "../common/input";
import Flippy, { FrontSide, BackSide } from "react-flippy";

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
        No Appointments booked yet{" "}
      </h6>
    );
  } else {
    return slots.map((slot) => (
      <div>
        <Flippy
          flipOnHover={false} // default false
          flipOnClick={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go todiv
          style={{ width: "320px", height: "470px" }} /// these are optional style, it is not necessary
        >
          <FrontSide animationDuration={600}>
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={doctor}
                class="card-img-top"
                alt="..."
                width="80px"
                height="220px"
              />
              <div class="card-body" style={{ textAlign: "left" }}>
                <h5 class="card-title" style={{ textAlign: "center" }}>
                  {slot.pname}
                </h5>

                <h6 class="card-text">patient Gender : {slot.gender}</h6>
                <h6 class="card-text">patient Age : {slot.age}</h6>

                <h6 class="card-text">
                  Date : {slot.date.toString().substring(0, 10)}
                </h6>
                <h6 class="card-text">
                  time : {slot.date.toString().substring(11, 16)}
                </h6>
                <h6 class="card-text">Health problem : {slot.healthproblem}</h6>
              </div>
            </div>
          </FrontSide>
          <BackSide animationDuration={600}>
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={doc}
                class="card-img-top"
                alt="..."
                width="80px"
                height="220px"
              />
              <div class="card-body" style={{ textAlign: "left" }}>
                <h5 class="card-title" style={{ textAlign: "center" }}>
                  Doctor Details{" "}
                </h5>
                <h6 class="card-text">specialist in: {slot.sp}</h6>

                <h6 class="card-text">Hospital Name: {slot.hospitalname}</h6>
                <h6 class="card-text">consultation Fee : {slot.fee}</h6>
              </div>
            </div>
          </BackSide>
        </Flippy>
      </div>
    ));
  }
};

export default orderdata;
