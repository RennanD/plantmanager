import React, { useState } from 'react';

import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

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

  async function handleSubmit() {
    if (!username) {
      Alert.alert('Ops', 'Me diz como chamar você 😅');
      return;
    }

    await AsyncStorage.setItem('@plantmanager:username', username);
    navigation.navigate('UserConfirmation', {
      title: 'Prontinho',
      icon: 'smile',
      subtitle: 'Agora vamos começar a cuidar das suas plantinhas',
      buttonTitle: 'Começar',
      nextScreen: 'AuthRoutes',
    });
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
                <Button
                  disabled={!username}
                  title="Confirmar"
                  onPress={handleSubmit}
                />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardView>
    </Container>
  );
}
