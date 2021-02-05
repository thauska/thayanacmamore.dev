import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Background from '../src/components/Background';
import Container from '../src/components/Container';
import Card from '../src/components/Card';
import ProfileImg from '../src/components/ProfileImg';


import db from '../db.json';

export default function Home() {

  return (
    <Background backgroundImage={db.bg}>
      <Container>
      </Container>
    </Background>
  );
}