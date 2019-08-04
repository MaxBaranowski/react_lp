import React from "react";
import styled from "styled-components";

export default function Header(props) {
  const Image = styled.div`
    background-image: url(${props.image});
  `;

  return (
    <header className="page-header">
      <Image className="page-header-bg" />
      <h1 className="page-header-title">{props.text}</h1>
    </header>
  );
}
