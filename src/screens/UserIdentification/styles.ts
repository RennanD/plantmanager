import styled, { css } from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface InputProps {
  isFocused: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 54px;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  margin-top: 20px;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Input = styled.TextInput<InputProps>`
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: ${colors.gray};

  color: ${colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;

  ${props =>
    props.isFocused &&
    css`
      border-bottom-color: ${colors.green};
    `}
`;

export const Footer = styled.View`
  margin-top: 40px;
  width: 100%;
  padding: 0 20px;
`;
