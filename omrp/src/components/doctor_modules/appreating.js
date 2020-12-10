import React, { Component } from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import doctor2 from "./femaledoctor.jpg";

//import userlogo from "../marchentpages/sam.png";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import BeautyStars from "beauty-stars";
import doctor from "./happydoctor.jpg";

class Card extends Component {
  state = {
    value: this.props.slots.rating,
    slots: this.props.slots,
  };

  render() {
    if (this.state.slots.length === 0) {
      return (
        <h6
          style={{
            color: "gray",
            textalign: "center",
          }}
        >
          Your Appointment data will displayed here once your approach doctor{" "}
        </h6>
      );
    } else {
      return this.state.slots.map((slot) => (
        <div>
          <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go todiv
            style={{ width: "310px", height: "470px" }} /// these are optional style, it is not necessary
          >
            <FrontSide animationDuration={600}>
              <div class="card" style={{ width: "17rem" }}>
                <img
                  src={slot.gender === "Female" ? doctor2 : doctor}
                  class="card-img-top"
                  alt="..."
                  width="80px"
                  height="220px"
                />
                <div class="card-body" style={{ textAlign: "left" }}>
                  <h5 class="card-title" style={{ textAlign: "center" }}>
                    dr' {slot.dname}
                  </h5>

                  <h6 class="card-text">Spicalist in : {slot.sp}</h6>

                  <h6 class="card-text">Hospital Name: {slot.hospitalname}</h6>

                  <h6 class="card-text">Contact No : {slot.phno}</h6>
                  <h6 class="card-text">Conseltation fee : {slot.fee}</h6>
                  <p>Click on card to rate doctor</p>
                </div>
              </div>
            </FrontSide>
            <BackSide animationDuration={600}>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src={slot.gender === "Female" ? doctor2 : doctor}
                  class="card-img-top"
                  alt="..."
                  width="80px"
                  height="220px"
                />
                <div class="card-body" style={{ textAlign: "left" }}>
                  <h5 class="card-title" style={{ textAlign: "center" }}>
                    dr' {slot.dname}
                  </h5>

                  <h6 class="card-text">Spicalist in : {slot.sp}</h6>

                  <h6 class="card-text">Hospital Name: {slot.hospitalname}</h6>
                </div>
              </div>
              <h5>please give your rating</h5>
              <BeautyStars
                style={{ backgroundColor: "gray" }}
                value={this.state.value}
                onChange={(value) => {
                  console.log(value);
                  this.setState({ value });
                }}
              />
            </BackSide>
          </Flippy>
        </div>
      ));
    }
  }
}

export default Card;
