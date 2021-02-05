import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 80vw;
  //padding-top: 45px;
  margin: auto 10%;
  background-color: white;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default Container;