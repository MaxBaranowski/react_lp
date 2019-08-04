import React from "react";

import Step from "./Step";

import "./footer.scss";

import image_step_1 from "images/krok_1.png";
import image_step_2 from "images/krok_2.png";
import image_step_3 from "images/krok_3_w.png";

export default function Footer(props) {
  return (
    <footer className={props.className}>
      <Step
        number="1"
        image={image_step_1}
        name="Krok 1"
        description="Wypełnienie&nbsp;wniosku i decyzja kredytowa."
      />
      <Step
        number="2"
        image={image_step_2}
        name="Krok 2"
        description="Kontakt&nbsp;telefoniczny i&nbsp;spotkanie z Agentem."
      />
      <Step
        number="3"
        image={image_step_3}
        name="Krok 3"
        description="Podpisanie&nbsp;umowy i&nbsp;pieniądze na&nbsp;Twoim&nbsp;koncie!"
      />

    </footer>
  );
}
