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
          <h1>Loremorenoa</h1>
          <p>Lorem, ipsum.</p>
          <p>Lorem ipsum dolor sit.</p>
        </header>
        <main className="consolidation-body">
          <header>
            <img src={arrow} alt="" className="banner-arrow"/>
            <ul>
              <li>
              Cras <b>id</b> quam
              </li>
              <li>
              Cras <b>quam</b> nulla
              </li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
          </header>
          <footer className="consolidation-body-footer">
            <p>
              <b>RRSO:</b> 00,00%
            </p>
          </footer>
        </main>
        <footer className="consolidation-footer">
          <img src={exMark} alt="" />
          <aside>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem.</p>
            <p className="grey">Lorem, ipsum dolor.</p>
          </aside>
        </footer>
      </div>
      <img src={arrB} alt="" className="bottom_arrow" />
    </section>
  );
}
