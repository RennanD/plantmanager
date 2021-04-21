import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import api from '../../services/api';

import { Container, Title, Subtitle, Head, styles } from './styles';

interface EnvironmnetProps {
  key: string;
  title: string;
}

export function PlantSelect(): JSX.Element {
  const [environments, setEnvironments] = useState<EnvironmnetProps[]>([]);
  const [selectedEnvironment, setSelectEnvironment] = useState('all');

  function handleSelectEnvironment(environment_key: string) {
    setSelectEnvironment(environment_key);
  }

  useEffect(() => {
    api.get('/plants_environments').then(response =>
      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...response.data,
      ]),
    );
  }, []);

  return (
    <Container>
      <Head>
        <Header />
        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar a sua planta?</Subtitle>
      </Head>

      <FlatList
        data={environments}
        keyExtractor={environment => environment.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.environmentList}
        renderItem={({ item: environment }) => (
          <EnvironmentButton
            title={environment.title}
            onPress={() => handleSelectEnvironment(environment.key)}
            active={environment.key === selectedEnvironment}
          />
        )}
      />
    </Container>
  );
}
