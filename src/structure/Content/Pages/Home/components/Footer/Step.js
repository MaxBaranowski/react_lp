import React from "react";

export default function Step(props) {
  return (
    <div className={"step step_" + props.number}>
      <img src={props.image} alt={props.description} />
      <aside>
        <h6>{props.name}</h6>
        <p>{props.description}</p>
      </aside>
    </div>
  );
}
