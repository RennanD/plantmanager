import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background: ${colors.shape};
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding: 50px 32px;
  align-items: center;
  justify-content: center;
  background: ${colors.shape};
`;

export const PlantName = styled.Text`
  text-align: center;
  font-family: ${fonts.heading};
  font-size: 24px;
  color: ${colors.heading};
  margin-top: 15px;
`;

export const AboutPlant = styled.Text`
  text-align: center;
  font-family: ${fonts.regular};
  color: ${colors.heading};
  font-size: 17px;
  margin-top: 10px;
`;

export const Controllers = styled.View`
  background: ${colors.white};
  padding: 32px;
  padding-top: 20px;
  padding-bottom: ${getBottomSpace() || 20}px;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const TipImage = styled.Image`
  height: 56px;
  width: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${fonts.regular};
  color: ${colors.blue};
  font-size: 17px;
  text-align: justify;
`;

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${fonts.complement};
  color: ${colors.heading};
  font-size: 12px;
  margin: 5px 0;
`;

export const DateTimePikerText = styled.Text`
  font-size: 24px;
  font-family: ${fonts.regular};
  text-align: center;
  color: ${colors.heading};
`;

export const DateTimePikerButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 40px 0;
`;
