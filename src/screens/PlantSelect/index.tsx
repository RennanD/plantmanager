import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import api from '../../services/api';

import { Container, Title, Subtitle, Head, Plants, styles } from './styles';

interface EnvironmnetProps {
  key: string;
  title: string;
}

interface PlantProps {
  name: string;
  photo: string;
}

export function PlantSelect(): JSX.Element {
  const [environments, setEnvironments] = useState<EnvironmnetProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [selectedEnvironment, setSelectEnvironment] = useState('all');

  function handleSelectEnvironment(environment_key: string) {
    setSelectEnvironment(environment_key);
  }

  useEffect(() => {
    api.get('/plants_environments?_sort=title&_order=asc').then(response =>
      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...response.data,
      ]),
    );
  }, []);

  useEffect(() => {
    api
      .get('/plants?_sort=name&_order=asc')
      .then(response => setPlants(response.data));
  }, []);

  return (
    <Container>
      <Head>
        <Header />
        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar a sua planta?</Subtitle>
      </Head>

      <View>
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
      </View>

      <Plants>
        <FlatList
          data={plants}
          keyExtractor={plant => plant.name}
          renderItem={({ item: plant }) => <PlantCardPrimary data={plant} />}
          numColumns={2}
          contentContainerStyle={styles.plantList}
          showsVerticalScrollIndicator={false}
        />
      </Plants>
    </Container>
  );
}
