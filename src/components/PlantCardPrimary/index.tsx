import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { SvgFromUri } from 'react-native-svg';

import { Container, PlantName } from './styles';

interface PlantCardPrimaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export function PlantCardPrimary({
  data,
  ...rest
}: PlantCardPrimaryProps): JSX.Element {
  return (
    <Container {...rest}>
      <SvgFromUri uri={data.photo} height={70} width={70} />
      <PlantName>{data.name}</PlantName>
    </Container>
  );
}
