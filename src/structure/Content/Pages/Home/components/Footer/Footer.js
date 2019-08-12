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
        name="Lorem 1"
        description="Lorem&nbsp;Lorem ipsum dolor sit."
      />
      <Step
        number="2"
        image={image_step_2}
        name="Lorem 2"
        description="Vivamus&nbsp;maecenas sit&nbsp;amet augue et purus."
      />
      <Step
        number="3"
        image={image_step_3}
        name="Lorem 3"
        description="Aliquam&nbsp;risus ipsum,&nbsp;gravida non&nbsp;urus nec!"
      />

    </footer>
  );
}
