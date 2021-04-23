import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { SvgFromUri } from 'react-native-svg';

import {
  Container,
  PlantName,
  PlantInfoContainer,
  Time,
  TimeLabel,
} from './styles';

interface PlantCardSecundaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
}

export function PlantCardSecundary({
  data,
  ...rest
}: PlantCardSecundaryProps): JSX.Element {
  return (
    <Container {...rest}>
      <SvgFromUri uri={data.photo} height={50} width={50} />
      <PlantName>{data.name}</PlantName>
      <PlantInfoContainer>
        <TimeLabel>Regar às</TimeLabel>
        <Time>{data.hour}</Time>
      </PlantInfoContainer>
    </Container>
  );
}
