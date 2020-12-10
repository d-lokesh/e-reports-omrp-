import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
import insta from "../assets/insta.png";
import fb from "../assets/fb.png";
import twt from "../assets/twit.png";

const FooterPage = () => {
  return (
    <MDBFooter
      style={{ backgroundColor: "#151b1c", color: "white" }}
      className="font-small pt-4 mt-4"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">e-reports</h5>
            <hr style={{ color: "white", backgroundColor: "white" }}></hr>
            <p>
              Online Medical Report Portal is s website where the records of
              patients can be stored, edited and updated. Every hospital or
              clinic uses some form of records to store the information of the
              patients. Using files and paper records occupy a lot of storage
              place and prone to be lost. Though digitalization of records has
              taken place, these records are only pertained to one hospital or
              clinic.
            </p>
            <p>
              Using this portal, patients can also view their personal medical
              records. Another feature offered by this platform is, patients can
              book an appointment with doctors they prefer. The patients are
              asked to enter their symptoms, and according to the symptoms
              entered, respective specialists are show.
            </p>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title" style={{ marginLeft: "45px" }}>
              Links
            </h5>
            <hr style={{ color: "white", backgroundColor: "white" }}></hr>
            <ul>
              <Link className="nav-link Active" to="/">
                Home
              </Link>

              <Link className="nav-link Active" to="/userreg">
                Register{" "}
              </Link>
              <Link className="nav-link Active" to="/login">
                Login
              </Link>
              <Link className="nav-link Active" to="/contactus">
                ContactUs
              </Link>
            </ul>
          </MDBCol>
          <MDBCol md="4" style={{ textalign: "center" }}>
            <h5 className="title" style={{ marginLeft: "45px" }}>
              Reach Us
            </h5>
            <hr style={{ color: "white", backgroundColor: "white" }}></hr>
            <span style={{ aligncontent: "center" }}>
              <img src={insta} alt="insta" height="50px" width="50px" />{" "}
              <a href="https://www.instagram.com/lokesh__d/">instgram</a>
            </span>
            <br />
            <span>
              <img src={fb} alt="insta" height="50px" width="50px" />{" "}
              <a href="https://www.facebook.com/dc.lokesh.12">Facebook</a>
            </span>
            <br />
            <span>
              <img src={twt} alt="insta" height="50px" width="50px" />{" "}
              <a href="https://twitter.com/Lokeshd73920200">Twiter</a>
            </span>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr style={{ color: "white", backgroundColor: "white" }}></hr>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Vnr_Thunders
          {/* <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a> */}
        </MDBContainer>
      </div>
      <hr style={{ color: "white", backgroundColor: "white" }}></hr>
    </MDBFooter>
  );
};

export default FooterPage;
