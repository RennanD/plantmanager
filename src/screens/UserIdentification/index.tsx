import React from 'react';

import { Platform } from 'react-native';
import {
  Container,
  Content,
  Header,
  Emoji,
  KeyboardView,
  Form,
  Input,
  Title,
  Footer,
} from './styles';

import { Button } from '../../components/Button';

export function UserIdentification(): JSX.Element {
  return (
    <Container>
      <KeyboardView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Content>
          <Form>
            <Header>
              <Emoji>😁</Emoji>
              <Title>
                Como podemos{'\n'}
                chamar você?
              </Title>
            </Header>
            <Input placeholder="Digite um nome" />
            <Footer>
              <Button />
            </Footer>
          </Form>
        </Content>
      </KeyboardView>
    </Container>
  );
}
