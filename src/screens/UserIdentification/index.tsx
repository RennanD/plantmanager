import React, { useState } from 'react';

import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';

import { useNavigation } from '@react-navigation/native';

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
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [username, setUsername] = useState('');

  const navigation = useNavigation();

  function handleSubmit() {
    navigation.navigate('UserConfirmation');
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!username);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handlInputChage(value: string) {
    setUsername(value);
    setIsFilled(!!value);
  }

  return (
    <Container>
      <KeyboardView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <Header>
                <Emoji>{isFilled ? '😊' : '😁'}</Emoji>
                <Title>
                  Como podemos{'\n'}
                  chamar você?
                </Title>
              </Header>
              <Input
                isFocused={isFocused || isFilled}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                value={username}
                onChangeText={handlInputChage}
              />
              <Footer>
                <Button title="Confirmar" onPress={handleSubmit} />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardView>
    </Container>
  );
}
