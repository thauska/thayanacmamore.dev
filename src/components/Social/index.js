import styled from "styled-components";
import {
  Whatsapp,
  Twitter,
  Linkedin,
  Gmail,
  Github,
} from "@styled-icons/simple-icons";

const SocialWrapper = styled.div`
  max-width: 40rem;
  a {
    text-decoration: none;
    padding: 0rem 0.4rem;
    background-color: ${({ theme }) => `${theme.colors.primary}80`};
    padding: 2rem;
  }
`;

export default function Social() {
  return (
    <SocialWrapper>
      <a>
          <Whatsapp />
      </a>
    </SocialWrapper>
  );
}
