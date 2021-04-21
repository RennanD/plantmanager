import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from '../../components/Button';

import { Container, Content, Emoji, Footer, Subtitle, Title } from './styles';

export function UserConfirmation(): JSX.Element {
  const navigation = useNavigation();

  function handleMoveOn() {
    navigation.navigate('PlantSelect');
  }

  return (
    <Container>
      <Content>
        <Emoji>😁</Emoji>
        <Title>Prontinho</Title>
        <Subtitle>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado
        </Subtitle>
        <Footer>
          <Button onPress={handleMoveOn} title="Começar" />
        </Footer>
      </Content>
    </Container>
  );
}
