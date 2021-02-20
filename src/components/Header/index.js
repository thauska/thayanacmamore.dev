import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.header`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  img {
    margin: 3px 10px;
    height: 40px;
  }
`;

export default function Navbar(props) {
  return (
    <Nav {...props}>
      <img src="/img/TCM.png" />
      {/* <Burger /> */}
    </Nav>
  );
}
