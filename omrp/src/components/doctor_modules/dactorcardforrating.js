import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import BeautyStars from "beauty-stars";
import doctor from "./happydoctor.jpg";

class Doctorcard extends Component {
  state = { value: 0 };

  render() {
    return (
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
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
                DR' Bobbby
              </h5>

              <h6 class="card-text">Spicalist in : cardio</h6>

              <h6 class="card-text">Hospital Name: Yashoodha</h6>

              <h6 class="card-text">Years of experiance : 2 Years</h6>
              <h6 class="card-text">Conseltation fee : RS 500</h6>
              <p>Click on card to rate doctor</p>
            </div>
          </div>
        </FrontSide>
        <BackSide animationDuration={600}>
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
                DR' Bobbby
              </h5>

              <h6 class="card-text">Spicalist in : cardio</h6>

              <h6 class="card-text">Hospital Name: Yashoodha</h6>
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
    );
  }
}

export default Doctorcard;
