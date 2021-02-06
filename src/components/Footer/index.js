import React from 'react';
import styled from 'styled-components';
import {Heart} from 'styled-icons/fa-solid'

const FooterWrapper = styled.footer`
  background-color: #00000090;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  div {
    margin: 2px 0;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

const LoveHeart = styled(Heart)`
  width: 18px;
  color: #A62D2D;
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <div>
        Made with
        {' '}
        {' '}
        <LoveHeart />
      </div>
      <div>
        Hosted on 
        {' '}
        {' '}
        <a href="https://vercel.com/">
          <span>▲ Vercel</span>
        </a>
      </div>
    </FooterWrapper>
  );
}