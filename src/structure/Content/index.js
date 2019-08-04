import React, { Component } from "react";

import Routes from "./routing/Routes";

import "./content.scss";

export default class Content extends Component {
  render() {
    return (
      <main id="content">
        <div id="bg" />
        <Routes />
      </main>
    );
  }
}
