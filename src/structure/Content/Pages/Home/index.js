import React, { Component } from "react";

import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

import "./home.scss";

const styleTemp = {
  margin: 0
};

export default class index extends Component {

  componentDidMount(){
    window.scrollTo(0,0)
  }

  render() {
    return (
      <section id="home-wrapper">
        <div id="consolidation">
          <Banner />
          <Banner style={styleTemp}/>
          {/* <section className="consolidation_form part">
            konsolidacja forma
          </section> */}
        </div>
        <Footer className="consolidation_howto" />
      </section>
    );
  }
}
