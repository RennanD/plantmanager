import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnvironmentButton({
  title,
  active = false,
  ...rest
}: EnvironmentButtonProps): JSX.Element {
  return (
    <Container active={active} {...rest}>
      <ButtonText active={active}>{title}</ButtonText>
    </Container>
  );
}
