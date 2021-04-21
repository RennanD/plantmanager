import React from 'react';

import { Container, Animation } from './styles';

import loadAnimation from '../../assets/secondLoad.json';

export function Loading(): JSX.Element {
  return (
    <Container>
      <Animation autoPlay loop source={loadAnimation} />
    </Container>
  );
}
