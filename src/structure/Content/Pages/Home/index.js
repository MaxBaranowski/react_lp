import React, { Component } from "react";

import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Calc from "./components/Calculator/Calculator";

import "./home.scss";

export default class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section id="home-wrapper">
        <div id="consolidation">
          <Banner />
          <Calc />
        </div>
        <Footer className="consolidation_howto" />
      </section>
    );
  }
}
