import React, { Component } from "react";

import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/ContentHeader";
import CheckOffer from "../components/CheckOffer";

import "./howItWorks.scss";

export default class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <ContentWrapper
        id="H_I_W"
        header={
          <Header
            image="/react_lp/images/howItWworks_1.png"
            text="Proces wnioskowania o ofertę jest bardzo prosty - tylko 3 kroki!"
          />
        }
      >
        <div className="part">
          <h2>Krok 1: Wniosek o pożyczkę</h2>
          <ol>
            <li>
              <b>
                1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias.
              </b>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, exercitationem? <br /> Lorem ipsum dolor sit amet consectetur.
                </li>
              </ul>
            </li>
            <li>
              <b>2. Lorem, ipsum.</b>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.
                </li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
            </li>
            <li>
              <b>3. Lorem ipsum dolor sit amet.</b>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure?{" "}
                  <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat repudiandae, ipsum nobis amet temporibus a necessitatibus nostrum quos, voluptate impedit quidem itaque at, neque sunt optio minus asperiores commodi reiciendis!
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci libero eius beatae odio impedit numquam perspiciatis a iure, facilis earum nam nobis quia placeat hic sequi aliquam eaque reiciendis necessitatibus.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="part">
          <h2>Krok 2: Rozmowa telefoniczna i spotkanie z Agentem</h2>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
              lorem3
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde velit eum quia? <br />Lorem ipsum dolor sit.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, fugiat? <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
          </ul>
        </div>

        <div className="part">
          <h2>Krok 3: Podpisanie umowy i wypłata pożyczki</h2>
          <ul>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, temporibus?<br /> Lorem ipsum dolor sit.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, explicabo fugit? <br /> Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nobis et.
            </li>
          </ul>
        </div>
        <CheckOffer top="20" />
      </ContentWrapper>
    );
  }
}
