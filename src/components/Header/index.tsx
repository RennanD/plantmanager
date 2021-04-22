import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';

import { Avatar, Container, Greeting, Username } from './styles';

export function Header(): JSX.Element {
  const [loggedUser, setLoggedUser] = useState('');

  useEffect(() => {
    async function fetchLoggedUser() {
      const username = await AsyncStorage.getItem('@plantmanager:username');

      setLoggedUser(username || '');
    }

    fetchLoggedUser();
  }, []);

  return (
    <Container>
      <View>
        <Greeting>Olá,</Greeting>
        <Username>{loggedUser}</Username>
      </View>

      <Avatar source={{ uri: 'https://github.com/rennand.png' }} />
    </Container>
  );
}
