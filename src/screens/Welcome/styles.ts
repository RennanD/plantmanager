import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export const TitlePage = styled.Text`
  font-size: 28px;
  text-align: center;
  color: ${colors.heading};
  line-height: 34px;
  padding-top: 40px;
  font-family: ${fonts.heading};
`;

export const HeroImage = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

export const Description = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${colors.heading};
  font-family: ${fonts.regular};
`;

export const NextButton = styled.TouchableOpacity`
  background: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;
