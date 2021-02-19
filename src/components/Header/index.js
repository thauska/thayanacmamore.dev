import React from "react";
import styled from "styled-components";
import { Heart } from "styled-icons/fa-solid";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
  img {
    margin-left: 10px;
    height: 50px;
  }
  menu > a {
    margin-right: 16px;
  }
`;

const LoveHeart = styled(Heart)`
  width: 18px;
  color: #a62d2d;
`;

export default function Footer(props) {
  return (
    <HeaderWrapper {...props}>
        <img src='/img/TCM.png' />      
    </HeaderWrapper>
  );
}
