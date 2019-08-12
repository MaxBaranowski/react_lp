import React, { Component } from "react";

import Slider from "./components/Slider";

import "./calculator.scss";

export default class Calculator extends Component {
  render() {
    return (
      <section className="consolidation-calc">
        <div className="consolidation-calc-wrapper">
          <form action="" className="consolidation-calc-form">
            <h1>Lorem, ipsum dolor.</h1>
            <div className="slider">
              <h2>Lorem ipsum dolor sit amet?</h2>
              <div className="slider-container">
                <Slider />
                <div className="slider-select" />
              </div>
              <h2>Lorem, ipsum dolor?</h2>
              <div className="slider-container">
                <Slider />
                <div className="slider-select" />
              </div>
            </div>
            <div className="installment-ammount">
              <p>
                Lorem, ipsum dolor: &nbsp;
                <span className="installment-ammount-result">0</span>&nbsp;zł
              </p>
            </div>
            <div className="loan-details">
              <div className="loan-detail">
                <div className="loan-detail-name">
                  Lorem ipsum dolor sit amet.
                </div>
                <div className="loan-detail-ammount">
                  <span className="loan-detail-ammount-result">0</span>&nbsp;zł
                </div>
              </div>
              <div className="loan-detail">
                <div className="loan-detail-name">
                  Lorem ipsum dolor sit amet.
                </div>
                <div className="loan-detail-ammount">
                  <span className="loan-detail-ammount-result">0</span>&nbsp;zł
                </div>
              </div>
              <div className="loan-detail">
                <div className="loan-detail-name">
                  Lorem ipsum dolor sit amet.
                </div>
                <div className="loan-detail-ammount">
                  <span className="loan-detail-ammount-result">0</span>&nbsp;zł
                </div>
              </div>
              <div className="loan-detail">
                <div className="loan-detail-name">
                  Lorem ipsum dolor sit amet.
                </div>
                <div className="loan-detail-ammount">
                  <span className="loan-detail-ammount-result">0</span>&nbsp;zł
                </div>
              </div>
              <div className="loan-detail">
                <div className="loan-detail-name">
                  Lorem ipsum dolor sit amet.
                </div>
                <div className="loan-detail-ammount">
                  <span className="loan-detail-ammount-result">0</span>&nbsp;zł
                </div>
              </div>
            </div>
            <div className="loan-example">
              <a href="#">Przykład</a>
            </div>
            <div className="check-offer">
              <button type="submit">Sprawdź ofertę</button>
            </div>
            <div className="agrees">
              <div className="agree">
                <label htmlFor="agree_1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestiae labore facilis totam doloribus dicta eaque.
                </label>
                <span className="checkbox" />
                <input type="checkbox" id="agree_1" />
              </div>
              <div className="agree">
                <label htmlFor="agree_2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  pariatur adipisci sunt alias veritatis, blanditiis repellat
                  cum quidem vitae eos?
                </label>
                <span className="checkbox" />
                <input type="checkbox" id="agree_2" />
              </div>
              <div className="agree">
                <label htmlFor="agree_3">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </label>
                <span className="checkbox" />
                <input type="checkbox" id="agree_3" />
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
