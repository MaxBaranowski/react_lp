import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./footer.scss";
import kpf from "images/kpf.png";

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-container">
          <section className="footer-head">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl arcu, consequat et sapien quis, mollis ultricies tortor. Sed sit amet nibh faucibus ipsum suscipit rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum quam eros, molestie at erat et, fringilla commodo mauris. Mauris vitae ullamcorper arcu. Curabitur ut laoreet odio. Ut eget laoreet mi, quis efficitur ante. Sed ut ipsum eget nunc suscipit placerat ut vulputate lorem. Etiam sed arcu sit amet nulla molestie rutrum. Suspendisse imperdiet nec leo tincidunt fermentum. Phasellus sodales, neque sed aliquam finibus, arcu metus aliquet nibh, id vestibulum sapien lectus nec arcu. Aliquam quis scelerisque risus.
            </p>
          </section>
          <section className="footer-content">
            <div className="footer-left">
              <p>Jesteśmy członkiem:</p>
              <a href="https://google.com">
                <img src={kpf} alt="" className="kpf-logo" />
              </a>
            </div>
            <div className="footer-right">
              <NavLink to="/about" activeClassName="active">
                O nas
              </NavLink>
              <a href="https://google.com">
                RODO
              </a>
              <a href="https://google.com">
                Polityka cookies
              </a>
            </div>
          </section>
        </div>
      </footer>
    );
  }
}
