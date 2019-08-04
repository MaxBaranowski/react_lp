import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

// import HandImage from "./hand.png";
import BgImage_1 from "./circle_1.png";
import BgImage_2 from "./circle_2.png";

export default function index(props) {
  const Circle = styled.figure`
    display: inline-block;
    width: 180px;
    height: 180px;
    background-image: url(${BgImage_1});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: ${props.top || 0}px;
    right: ${props.right || 0}px;
    cursor: pointer;
    z-index: 3;

    &:hover{
      background-image: url(${BgImage_2});
    }

    a {
      height: 100%;
      width: 100%;
      display: block;
      text-decoration: none;
      color: #000;
      &:hover {
        color: #f6bb33;
      }
    }
  `;

  return (
    <Circle id="check_offer">
      <NavLink to="/">
        <Text>
          Sprawdź
          <br />
          ofertę
        </Text>
        {/* <Hand src={HandImage} alt="" /> */}
      </NavLink>
    </Circle>
  );
}

const Text = styled.p`
  font-size: 1.5em;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

// const Hand = styled.img`
//   display: inline-block;
//   position: absolute;
//   bottom: -25px;
//   left: 20px;
// `;
