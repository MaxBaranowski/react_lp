import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./navigation.scss";
import logo from "images/logo.png";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { isMenuShow: false };

    this.showHideMenu = this.showHideMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showHideMenu() {
    this.setState(state => ({
      isMenuShow: !state.isMenuShow
    }));
  }

  hideMenu() {
    this.setState(state => ({
      isMenuShow: false
    }));
  }

  render() {
    const { isMenuShow } = this.state;
    return (
      <nav id="navigation">
        <div className="navigation-container">
          <div className="logo">
            <NavLink
              to="/"
              exact={true}
              activeClassName="active"
              onClick={this.hideMenu}
            >
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="menu">
            <button onClick={this.showHideMenu}>menu</button>
          </div>
          <CSSTransition
            in={isMenuShow}
            // exit={true}
            // appear={true}
            classNames="show-menu"
            timeout={0}
          >
            <div className="navigation-links">
              <div className="links">
                <NavLink
                  to="/offer"
                  onClick={this.showHideMenu}
                  activeClassName="active"
                >
                  O ofercie
                </NavLink>
                <NavLink
                  to="/benefits"
                  onClick={this.showHideMenu}
                  activeClassName="active"
                >
                  Korzyści
                </NavLink>
                <NavLink
                  to="/how_it_works"
                  onClick={this.showHideMenu}
                  activeClassName="active"
                >
                  Jak to działa
                </NavLink>
                <NavLink
                  to="/faq"
                  onClick={this.showHideMenu}
                  activeClassName="active"
                >
                  FAQ
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={this.showHideMenu}
                  activeClassName="active"
                >
                  Kontakt
                </NavLink>
              </div>
            </div>
          </CSSTransition>
        </div>
      </nav>
    );
  }
}
