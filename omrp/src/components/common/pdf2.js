import React, { Component } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../common/pdf";

class PDFV extends Component {
  state = {};
  render() {
    return (
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    );
  }
}

export default PDFV;
