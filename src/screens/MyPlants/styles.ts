import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background: ${colors.background};
`;

export const Spotlight = styled.View`
  background: ${colors.blue_light};
  flex-direction: row;
  padding: 0 20px;
  border-radius: 20px;
  height: 110px;
  justify-content: space-between;
  align-items: center;
`;

export const SpotlightImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const SpotlightText = styled.Text`
  flex: 1;
  color: ${colors.blue};
  padding: 0 20px;
  text-align: justify;
`;

export const PlantsContainer = styled.View`
  flex: 1%;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin: 20px;
`;
