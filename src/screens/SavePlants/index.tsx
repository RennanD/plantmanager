import React, { useState } from 'react';
import { SvgFromUri } from 'react-native-svg';

import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import { useRoute } from '@react-navigation/native';

import { isBefore, format } from 'date-fns';

import { Alert, Platform } from 'react-native';
import {
  AboutPlant,
  Container,
  PlantName,
  Controllers,
  TipImage,
  TipContainer,
  TipText,
  AlertLabel,
  PlantInfo,
  DateTimePikerText,
  DateTimePikerButton,
} from './styles';

import waterdrop from '../../assets/waterdrop.png';
import { Button } from '../../components/Button';
import { PlantProps } from '../../libs/storage';

interface RouteParams {
  plant: PlantProps;
}

export function SavePlants(): JSX.Element {
  const route = useRoute();

  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePiker, setShowDatePiker] = useState(Platform.OS === 'ios');

  const { plant } = route.params as RouteParams;

  function handleChangeTime(event: Event, datetime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePiker(olsState => !olsState);
    }

    if (datetime && isBefore(datetime, new Date())) {
      setSelectedDateTime(new Date());
      Alert.alert('Erro', 'Escolha um horário no futuro. ⏰️');
      return;
    }

    if (datetime) {
      setSelectedDateTime(datetime);
    }
  }

  function handleShowDateTimePikerForAndroid() {
    setShowDatePiker(oldState => !oldState);
  }

  return (
    <Container>
      <PlantInfo>
        <SvgFromUri uri={plant.photo} height={150} width={150} />

        <PlantName>{plant.name}</PlantName>
        <AboutPlant>{plant.about}</AboutPlant>
      </PlantInfo>

      <Controllers>
        <TipContainer>
          <TipImage source={waterdrop} />
          <TipText>{plant.water_tips}</TipText>
        </TipContainer>

        <AlertLabel>Esconha o melhor horário para ser lembrado</AlertLabel>

        {showDatePiker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />
        )}

        {Platform.OS === 'android' && (
          <DateTimePikerButton onPress={handleShowDateTimePikerForAndroid}>
            <DateTimePikerText>{`Mudar ${format(
              selectedDateTime,
              'HH:mm',
            )}`}</DateTimePikerText>
          </DateTimePikerButton>
        )}

        <Button title="Cadastrar planta" />
      </Controllers>
    </Container>
  );
}
