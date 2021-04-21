import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ContainerProps {
  active: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  height: 40px;
  width: 76px;
  background: ${colors.shape};
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-right: 5px;

  ${props =>
    props.active &&
    css`
      background: ${colors.green_light};
    `}
`;

export const ButtonText = styled.Text<ContainerProps>`
  color: ${colors.heading};
  font-family: ${fonts.regular};

  ${props =>
    props.active &&
    css`
      font-family: ${fonts.heading};
      color: ${colors.green_dark};
    `}
`;
