import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 48%;
  background: ${colors.shape};
  border-radius: 20px;
  padding: 10px 0;
  align-items: center;
  margin: 8px;
`;

export const PlantName = styled.Text`
  color: ${colors.green_dark};
  font-family: ${fonts.heading};
  margin: 16px 0;
`;
