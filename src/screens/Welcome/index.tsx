import React from 'react';

import { Text } from 'react-native';

import {
  Container,
  TitlePage,
  HeroImage,
  Description,
  NextButton,
} from './styles';

import wateringImg from '../../assets/watering.png';

export function Welcome(): JSX.Element {
  return (
    <Container>
      <TitlePage>
        Gerencie {'\n'} suas plantas de {'\n'} forma fácil
      </TitlePage>

      <HeroImage source={wateringImg} />

      <Description>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Description>

      <NextButton activeOpacity={0.8}>
        <Text style={{ color: '#fff', fontSize: 24 }}>{'>'}</Text>
      </NextButton>
    </Container>
  );
}
