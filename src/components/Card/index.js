import styled from "styled-components";

const Card = styled.div`
  overflow: hidden;
  flex-grow: 1;
  h1 {
    font-size: 3em;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0;
    @media screen and (max-width: 800px) {
      font-size: 5vw;
    }
  }
  h3 {
    font-size: 1.25em;
    font-weight: 500;
    line-height: 2;
    margin-bottom: 0;
    @media screen and (max-width: 800px) {
      font-size: 3.5vw;
    }
  }
  p {
    font-size: 0.87em;
    font-weight: 400;
    line-height: 1.3;
  }
`;

Card.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    padding: 20px 0px;
  }
`;

Card.Topic = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}D9`};
  padding: 2rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;
`;

export default Card;
