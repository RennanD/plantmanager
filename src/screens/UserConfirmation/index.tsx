import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Button } from '../../components/Button';

import { Container, Content, Emoji, Footer, Subtitle, Title } from './styles';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  smile: '😁',
  hug: '🤗',
};

export function UserConfirmation(): JSX.Element {
  const route = useRoute();
  const navigation = useNavigation();

  const {
    buttonTitle,
    icon,
    nextScreen,
    subtitle,
    title,
  } = route.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }

  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Footer>
          <Button onPress={handleMoveOn} title={buttonTitle} />
        </Footer>
      </Content>
    </Container>
  );
}
