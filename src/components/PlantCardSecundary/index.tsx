import { Feather } from '@expo/vector-icons';
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';

import { SvgFromUri } from 'react-native-svg';
import colors from '../../styles/colors';

import {
  Container,
  PlantName,
  PlantInfoContainer,
  Time,
  TimeLabel,
  RemoveButton,
} from './styles';

interface PlantCardSecundaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  onRemove: () => void;
}

export function PlantCardSecundary({
  data,
  onRemove,
  ...rest
}: PlantCardSecundaryProps): JSX.Element {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <RemoveButton onPress={onRemove}>
            <Feather name="trash" size={32} color={colors.white} />
          </RemoveButton>
        </Animated.View>
      )}
    >
      <Container {...rest}>
        <SvgFromUri uri={data.photo} height={50} width={50} />
        <PlantName>{data.name}</PlantName>
        <PlantInfoContainer>
          <TimeLabel>Regar às</TimeLabel>
          <Time>{data.hour}</Time>
        </PlantInfoContainer>
      </Container>
    </Swipeable>
  );
}
