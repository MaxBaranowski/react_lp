import React from "react";

import arrow from "images/arrow.png";
import exMark from "images/banner_home_mark.png";
import arrB from "images/arrow_bottom.png";

import "./banner.scss";

export default function Banner(props) {
  return (
    <section className="consolidation_banner part" style={props.style}>
      <div className="consolidation-wrapper">
        <header className="consolidation-header">
          <h1>Konsolidacja</h1>
          <p>Innowacyjna oferta.</p>
          <p>Wyjątkowo tanio!</p>
        </header>
        <main className="consolidation-body">
          <header>
            <img src={arrow} alt="" className="banner-arrow"/>
            <ul>
              <li>
                Do <b>60 000</b> zł
              </li>
              <li>
                Do <b>60</b> miesięcy
              </li>
              <li>Szybko, bez formalności</li>
            </ul>
          </header>
          <footer className="consolidation-body-footer">
            <p>
              <b>RRSO:</b> 45,30%
            </p>
          </footer>
        </main>
        <footer className="consolidation-footer">
          <img src={exMark} alt="" />
          <aside>
            <p>Uwolnij się od</p>
            <p>Chwilówek</p>
            <p className="grey">I płąć mniej</p>
          </aside>
        </footer>
      </div>
      <img src={arrB} alt="" className="bottom_arrow" />
    </section>
  );
}
