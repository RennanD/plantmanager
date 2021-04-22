import React, { useEffect, useState } from 'react';

import { FlatList } from 'react-native';

// eslint-disable-next-line import/no-duplicates
import { formatDistance } from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import { ptBR } from 'date-fns/locale';

import {
  Container,
  PlantsContainer,
  Spotlight,
  SpotlightImage,
  SpotlightText,
  PlantsTitle,
} from './styles';

import { Header } from '../../components/Header';

import waterdrop from '../../assets/waterdrop.png';

import { loadPlants, PlantProps } from '../../libs/storage';

export function MyPlants(): JSX.Element {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState('');

  useEffect(() => {
    loadPlants().then(plants => {
      const nextTime = formatDistance(
        new Date(plants[0].datetimeNotification).getTime(),
        new Date().getTime(),
        {
          locale: ptBR,
        },
      );

      setNextWatered(
        `Não esqueça de regar a ${plants[0].name} daqui à ${nextTime} horas`,
      );

      setMyPlants(plants);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Header />

      <Spotlight>
        <SpotlightImage source={waterdrop} />
        <SpotlightText>{nextWatered}</SpotlightText>
      </Spotlight>

      <PlantsContainer>
        <PlantsTitle>Próximas regadas</PlantsTitle>

        <FlatList
          data={myPlants}
          keyExtractor={myPlant => String(myPlant.id)}
          renderItem={() => <SpotlightText>Elemento</SpotlightText>}
          showsVerticalScrollIndicator={false}
        />
      </PlantsContainer>
    </Container>
  );
}
