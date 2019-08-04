import React, { Component } from "react";
import ContentWrapper from "../components/ContentWrapper";

export default class index extends Component {
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render() {
    return <ContentWrapper id="faq">FAQ page</ContentWrapper>;
  }
}
