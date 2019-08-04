import React from "react";
import { Route, Switch } from "react-router-dom";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import HomePage from "../Pages/Home";
import OfferPage from "../Pages/Offer/index";
import BenefitsPage from "../Pages/Benefits/index";
import How_it_worksPage from "../Pages/How_it_works/index";
import FAQPage from "../Pages/FAQ";
import ContactPage from "../Pages/Contact";
import AboutPage from "../Pages/About/index";

export default props => {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={1000} classNames="fade">
            <Switch location={location}>
              <Route exact path="/" component={HomePage} />
              <Route path="/offer/" component={OfferPage} />
              <Route path="/benefits/" component={BenefitsPage} />
              <Route path="/how_it_works" component={How_it_worksPage} />
              <Route path="/faq/" component={FAQPage} />
              <Route path="/contact/" component={ContactPage} />
              <Route path="/about/" component={AboutPage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};
