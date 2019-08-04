import React, { Component } from "react";

import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/ContentHeader";
import CheckOffer from "../components/CheckOffer";

import "./benefits.scss";

export default class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <ContentWrapper
        id="benefits"
        header={
          <Header image="/images/benefits_1.png" text="Dlaczego warto?" />
        }
      >
        <div className="part">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur.
          </h2>
          <ul>
            <li>
              <b>Lorem ipsum dolor sit.</b> Lorem, ipsum dolor sit amet
              consectetur adipisicing.
            </li>
            <li>
              <b>Lorem, ipsum dolor.</b> Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Earum.
            </li>
            <li>
              <b>Prosto i bez formalności.</b> Do 15 000 zł produkt jest
              dostępny na oświadczenie, bez dokumentowania zobowiązań
            </li>
            <li>
              <b>Lorem, ipsum.</b>Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam aut sunt quae, ipsa laudantium minima?
            </li>
            <li>
              <b>Lorem ipsum dolor sit amet consectetur.</b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et.
            </li>
            <li>
              <b>Lorem, ipsum.</b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis doloribus mollitia eos.
            </li>
            <li>
              <b>Lorem ipsum dolor sit.</b> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, tempore eveniet inventore nisi eius facere dolor eos molestiae esse corporis.
            </li>
            <li>
              <b>Lorem ipsum dolor sit.</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur consequatur necessitatibus.
            </li>
          </ul>
        </div>
        <CheckOffer top="100" />
      </ContentWrapper>
    );
  }
}
