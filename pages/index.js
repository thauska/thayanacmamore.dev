import React from "react";

import Container from "../src/components/Container";
import Card from "../src/components/Card";
import ProfileImg from "../src/components/ProfileImg";

export default function Home() {
  return (
      <Container>
        <Card>
          <Card.Content>
            <ProfileImg src="https://avatars.githubusercontent.com/u/8525721?s=460&u=12edbf1f91a587a5a62df48f0151c47d3dce1568&v=4" />
            <Card.Topic>
              <h1>Thayana Corrêa Mamoré</h1>
              <h3>Desenvolvedora FullStack | Entusiasta WebXR</h3>
            </Card.Topic>
          </Card.Content>
        </Card>
      </Container>
  );
}
