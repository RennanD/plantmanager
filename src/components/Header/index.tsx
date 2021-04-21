import React from 'react';
import { View } from 'react-native';

import { Avatar, Container, Greeting, Username } from './styles';

export function Header(): JSX.Element {
  return (
    <Container>
      <View>
        <Greeting>Olá,</Greeting>
        <Username>Rennan</Username>
      </View>

      <Avatar source={{ uri: 'https://github.com/rennand.png' }} />
    </Container>
  );
}
