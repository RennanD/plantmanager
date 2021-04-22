import React from 'react';
import { SvgFromUri } from 'react-native-svg';

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

export function SavePlants(): JSX.Element {
  return (
    <Container>
      <PlantInfo>
        <SvgFromUri uri="" height={150} width={150} />

        <PlantName>Espada de São Jorge</PlantName>
        <AboutPlant>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          architecto soluta magnam quasi et, ex vero similique nam voluptate
          fugiat explicabo, deserunt, natus illum. Esse molestiae optio
          reiciendis numquam alias?
        </AboutPlant>
      </PlantInfo>

      <Controllers>
        <TipContainer>
          <TipImage source={waterdrop} />
          <TipText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            culpa temporibus fugit consectetur tenetur.
          </TipText>
        </TipContainer>

        <AlertLabel>Esconha o melhor horário para ser lembrado</AlertLabel>

        <Button title="Cadastrar planta" />
      </Controllers>
    </Container>
  );
}
