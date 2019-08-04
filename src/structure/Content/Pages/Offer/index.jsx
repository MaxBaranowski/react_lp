import React, { Component } from "react";

import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/ContentHeader";
import CheckOffer from "../components/CheckOffer";

import "./offer.scss";

export default class index extends Component {

  componentDidMount(){
    window.scrollTo(0,0)
  }
  
  render() {
    return (
      <ContentWrapper
        id="offer"
        header={
          <Header
            image="/images/offer_1.png"
            text="Konsolidacja - nowa, wyjątkowa oferta!"
          />
        }
      >
        <div className="part">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum felis.</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora saepe cupiditate possimus minima!
          </p>
        </div>

        <div className="part">
          <h2>Parametry oferty</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facilis!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eius!
            </li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>

        <div className="part">
          <h2>Sprawdź czy oferta jest dla Cibie! Warunki:</h2>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat alias eum praesentium! Esse, eum voluptatem?
            </li>
          </ul>
        </div>
        <CheckOffer top="100" />
      </ContentWrapper>
    );
  }
}
