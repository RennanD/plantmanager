import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

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
      <PlantName>{data.name}</PlantName>
    </Container>
  );
}
