import React, { Component } from "react";

import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/ContentHeader";
import CheckOffer from "../components/CheckOffer";

import "./about.scss";

export default class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <ContentWrapper
        id="about"
        header={<Header image="/react_lp/images/about_1.png" text="O nas" />}
        bodyClassName="page-body"
      >
        <div className="part">
          <p className="title">
            Lorem, ipsum dolor.{" "}
            <b>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </b>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ab dolor necessitatibus deleniti nulla, minus incidunt.
          </p>
          <p>
            Lorem ipsum dolor sit.{" "}
            <b>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus.
            </b>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, dolores consequuntur?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum! <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ducimus earum doloribus nemo exercitationem? Eveniet, nobis excepturi.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, aliquam dolor rerum ipsa est magnam consectetur cupiditate numquam!{" "}
            <b>Lorem ipsum dolor sit amet consectetur.</b>,
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="part">
          <h2>Wartości, jakimi się kierujemy</h2>
          <ul>
            <li className="step step_1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, incidunt! Culpa, labore!
            </li>
            <li className="step step_2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nemo soluta eos molestias rem fugiat reiciendis minima quos accusamus facere.
            </li>
            <li className="step step_3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, labore repellendus.
            </li>
          </ul>
        </div>
        <div className="part">
          <h2 className="link">
            <b>Wiecej informacji o nas znajdziesz na </b>
            <a href="https://google.com">www.google.com</a>
          </h2>
        </div>
        <CheckOffer top="20" />
      </ContentWrapper>
    );
  }
}
