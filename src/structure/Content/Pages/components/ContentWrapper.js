import React from "react";

export default function ContentWrapper(props) {
  return (
    <section className="page-wrapper" id={`${props.id}-wrapper`}>
      <div className="page-container">
        {props.header}
        <main className="page-body">{props.children}</main>
      </div>
    </section>
  );
}
