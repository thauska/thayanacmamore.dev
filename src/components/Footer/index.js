import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #00000090;
  padding: 15px 25px;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
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

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <p>
        Portfólio criado com
        {' '}
        {' '}
        <a href="https://nextjs.org/">
          <span>Next.js + Styled Components</span>
        </a>
      </p>
    </FooterWrapper>
  );
}