import styled, { css } from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.TouchableOpacity`
  background: ${colors.green};
  height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: ${fonts.heading};
`;
