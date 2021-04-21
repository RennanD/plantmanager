import React from 'react';
import { Header } from '../../components/Header';

import { Container, Title, Subtitle, Head } from './styles';

export function PlantSelect(): JSX.Element {
  return (
    <Container>
      <Head>
        <Header />
        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar a sua planta?</Subtitle>
      </Head>
    </Container>
  );
}
