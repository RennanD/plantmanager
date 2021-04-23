import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../screens/Welcome';
import { UserIdentification } from '../screens/UserIdentification';
import { UserConfirmation } from '../screens/UserConfirmation';

import colors from '../styles/colors';
// import { PlantSelect } from '../screens/PlantSelect';
import { SavePlants } from '../screens/SavePlants';
import { MyPlants } from '../screens/MyPlants';
import AuthRoutes from './tabs.routes';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Stack.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="UserIdentification" component={UserIdentification} />
    <Stack.Screen name="UserConfirmation" component={UserConfirmation} />
    <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
    <Stack.Screen name="SavePlants" component={SavePlants} />
    <Stack.Screen name="MyPlants" component={MyPlants} />
  </Stack.Navigator>
);

export default AppRoutes;
