import React from 'react';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  TitlePage,
  HeroImage,
  Description,
  NextButton,
  Wrapper,
} from './styles';

import wateringImg from '../../assets/watering.png';
import colors from '../../styles/colors';

export function Welcome(): JSX.Element {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <Container>
      <Wrapper>
        <TitlePage>
          Gerencie
          {'\n'}suas plantas de
          {'\n'}forma fácil
        </TitlePage>

        <HeroImage resizeMode="contain" source={wateringImg} />

        <Description>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Description>

        <NextButton onPress={handleStart} activeOpacity={0.8}>
          <Feather name="chevron-right" size={32} color={colors.white} />
        </NextButton>
      </Wrapper>
    </Container>
  );
}
