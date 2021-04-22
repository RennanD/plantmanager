import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-top: ${getStatusBarHeight()}px;
`;

export const Greeting = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.regular};
`;

export const Username = styled.Text`
  font-size: 32px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  line-height: 40px;
`;

export const Avatar = styled.Image`
  height: 56px;
  width: 56px;
  border-radius: 35px;
`;
