import React from 'react';
import { SvgFromUri } from 'react-native-svg';

import { useRoute } from '@react-navigation/native';
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
} from './styles';

import waterdrop from '../../assets/waterdrop.png';
import { Button } from '../../components/Button';

interface PlantProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  frequency: {
    times: number;
    repeat_ever: string;
  };
}

interface RouteParams {
  plant: PlantProps;
}

export function SavePlants(): JSX.Element {
  const route = useRoute();

  const { plant } = route.params as RouteParams;

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

        <Button title="Cadastrar planta" />
      </Controllers>
    </Container>
  );
}
