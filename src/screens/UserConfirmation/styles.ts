import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 54px;
`;

export const Title = styled.Text`
  font-size: 22px;
  line-height: 38px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-family: ${fonts.regular};
  font-size: 17px;
  text-align: center;
  padding: 0 10px;
  color: ${colors.heading};
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const Footer = styled.View`
  margin-top: 20px;
  width: 100%;
  padding: 0 50px;
`;
