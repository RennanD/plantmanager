import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 100%;
  padding: 25px 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background: ${colors.shape};
  margin: 5px 0;
`;

export const RemoveButton = styled(RectButton)`
  width: 100px;
  height: 85px;
  background: ${colors.red};
  margin-top: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  right: 20px;
  padding-left: 15px;
`;

export const PlantName = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-family: ${fonts.heading};
  font-size: 17px;
  color: ${colors.heading};
`;

export const PlantInfoContainer = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.regular};
  color: ${colors.body_light};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
`;
