  
import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  font-weight: bold;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 10px;
  z-index: 15;
  li {
    padding: 10px 15px;
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.colors.primary};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Portfólio</li>
      <li>Skills</li>
      <li>Sobre</li>
    </Ul>
  )
}

export default RightNav