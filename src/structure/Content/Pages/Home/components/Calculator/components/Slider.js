import React, { Component } from "react";

import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
//https://whoisandy.github.io/react-rangeslider/

export default class index extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 10
    };
  }

  handleChangeStart = () => {
    console.log("Change event started");
  };

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  handleChangeComplete = () => {
    console.log("Change event completed");
  };

  render() {
    const { value } = this.state;
    return (
      <Slider
        min={100}
        max={60000}
        value={value}
        tooltip={false}
        step={100}
        onChangeStart={this.handleChangeStart}
        onChange={this.handleChange}
        onChangeComplete={this.handleChangeComplete}
      />
    );
  }
}
