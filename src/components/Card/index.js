import styled from "styled-components";

const Card = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  overflow: hidden;
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
    font-size: 1.2em;
    font-weight: 500;
    line-height: 2;
    margin-bottom: 0;
    @media screen and (max-width: 800px) {
      font-size: 3vw;
    }
  }
  p {
    font-size: 0.87em;
    font-weight: 400;
    line-height: 1.3;
  }
`;

Card.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  * {
    margin: 0;
  }
`;

Card.Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
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
