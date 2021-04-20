import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { ButtonText, Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, style, ...rest }: ButtonProps): JSX.Element {
  return (
    <Container {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
