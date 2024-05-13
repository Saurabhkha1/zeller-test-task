import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, DetailScreen} from '../../screens';

type RootStackPorps = {
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackPorps>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Details'}
        component={DetailScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
