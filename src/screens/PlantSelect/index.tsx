import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import api from '../../services/api';

import { Container, Title, Subtitle, Head, Plants, styles } from './styles';

import { Loading } from '../../components/Loading';
import colors from '../../styles/colors';

interface EnvironmnetProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: number;
  name: string;
  photo: string;
  environments: string[];
}

export function PlantSelect(): JSX.Element {
  const [environments, setEnvironments] = useState<EnvironmnetProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);

  const [selectedEnvironment, setSelectEnvironment] = useState('all');

  const [loading, setLoading] = useState(true);

  const [pagination, setPagination] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  const navigation = useNavigation();

  function fetchPlants() {
    api
      .get(`/plants?_sort=name&_order=asc&_page=${pagination}&_limit=8`)
      .then(response => {
        if (!response.data) {
          setLoadedAll(true);
          return;
        }
        if (pagination > 1) {
          setPlants(oldState => [...oldState, ...response.data]);
          setFilteredPlants(oldState => [...oldState, ...response.data]);
        } else {
          setPlants(response.data);
          setFilteredPlants(response.data);
        }
        setLoading(false);
        setLoadingMore(false);
      });
  }

  function handleSelectEnvironment(environment_key: string) {
    setSelectEnvironment(environment_key);

    if (environment_key === 'all') {
      setFilteredPlants(plants);
    } else {
      const filtered = plants.filter(plant =>
        plant.environments.includes(environment_key),
      );

      setFilteredPlants(filtered);
    }
  }

  function handleFetchMore(distance: number) {
    if (loadedAll) return;

    if (distance >= 1) {
      setLoadingMore(true);
      setPagination(oldState => oldState + 1);
      fetchPlants();
    }
  }

  function handleShowPlant(plant: PlantProps) {
    navigation.navigate('SavePlants', { plant });
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
    fetchPlants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Head>
        <Header />
        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar a sua planta?</Subtitle>
      </Head>

      {loading ? (
        <Loading />
      ) : (
        <>
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
              data={filteredPlants}
              keyExtractor={plant => String(plant.id)}
              renderItem={({ item: plant }) => (
                <PlantCardPrimary
                  onPress={() => handleShowPlant(plant)}
                  data={plant}
                />
              )}
              numColumns={2}
              contentContainerStyle={styles.plantList}
              showsVerticalScrollIndicator={false}
              onEndReachedThreshold={0.1}
              onEndReached={({ distanceFromEnd }) => {
                handleFetchMore(distanceFromEnd);
              }}
              ListFooterComponent={
                loadingMore ? (
                  <ActivityIndicator size={32} color={colors.green} />
                ) : (
                  <></>
                )
              }
            />
          </Plants>
        </>
      )}
    </Container>
  );
}
