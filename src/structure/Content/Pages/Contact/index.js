import React, { Component } from "react";
import ContentWrapper from "../components/ContentWrapper";

import "./contact.scss";

export default class index extends Component {
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render() {
    return (
      <ContentWrapper id="contact">
        <div className="container">
          <div className="contact-left">
            <h1>Kontakt</h1>
            <ul>
              <li className="step step_1">Masz pytanie?</li>
              <li className="step step_3">Chcesz dowiedzić się więcej?</li>
            </ul>
            <p>
              <a href="tel:221004990">00 000 000 000</a>
            </p>
            <p>
              <a href="mailto: mail@mail.com">
              mail@mail.com
              </a>
            </p>
            <address>
              Our Company Name<br />
              str. Long-Name 286 <br />
              00-000 Poland
            </address>
          </div>
          <div className="contact-right">
            <div className="call-image" />
          </div>
        </div>
      </ContentWrapper>
    );
  }
}
