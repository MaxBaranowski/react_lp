import React from "react";

import Navigation from "./Navigation";
import Content from "./Content";
import Footer from "./Footer";

import "./main.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
