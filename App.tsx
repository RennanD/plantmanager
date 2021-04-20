import React from 'react';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import { Welcome } from './src/screens/Welcome';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  return fontsLoaded ? <Welcome /> : <AppLoading />;
}
