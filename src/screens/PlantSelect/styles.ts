import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`;

export const Head = styled.View`
  padding: 0 32px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  font-family: ${fonts.regular};
  height: 20px;
  color: ${colors.heading};
`;

export const Plants = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 24px;
`;

export const styles = StyleSheet.create({
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
    paddingRight: 40,
  },

  plantList: {
    paddingBottom: 40,
  },
});
