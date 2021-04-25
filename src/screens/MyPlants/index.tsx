import React, { useEffect, useState } from 'react';

import { Alert, FlatList } from 'react-native';

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

import { deletePlant, loadPlants, PlantProps } from '../../libs/storage';
import { PlantCardSecundary } from '../../components/PlantCardSecundary';
import { Loading } from '../../components/Loading';

export function MyPlants(): JSX.Element {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState('');

  function handleRemovePlant(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}`, [
      {
        text: 'Não 🙏',
        style: 'cancel',
      },
      {
        text: 'Sim 🥺',
        onPress: async () => {
          try {
            await deletePlant(String(plant.id));

            setMyPlants(oldState =>
              oldState.filter(item => item.id !== plant.id),
            );
          } catch (error) {
            Alert.alert('Erro', 'Não foi possível remover 🥺');
          }
        },
      },
    ]);
  }

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
        `Não esqueça de regar a ${plants[0].name} daqui à ${nextTime}`,
      );

      setMyPlants(plants);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <>
          <Spotlight>
            <SpotlightImage source={waterdrop} />
            <SpotlightText>{nextWatered}</SpotlightText>
          </Spotlight>

          <PlantsContainer>
            <PlantsTitle>Próximas regadas</PlantsTitle>

            <FlatList
              data={myPlants}
              keyExtractor={myPlant => String(myPlant.id)}
              renderItem={({ item: plant }) => (
                <PlantCardSecundary
                  onRemove={() => handleRemovePlant(plant)}
                  data={plant}
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 40,
              }}
            />
          </PlantsContainer>
        </>
      )}
    </Container>
  );
}
