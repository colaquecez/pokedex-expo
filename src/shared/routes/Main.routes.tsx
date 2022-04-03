import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Details } from '../../screens/';
import MenuRouter from '../routes/Menu.routes';

export type RootStackParamList = {
  ListHome: undefined;
  Details: { name: string; url: string; image: string };
};

const MainStack = createNativeStackNavigator<RootStackParamList>();

const MainStackRoute = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        options={{
          headerShown: false
        }}
        name="ListHome"
        component={MenuRouter}
      />
      <MainStack.Screen
        options={{
          animation: 'slide_from_bottom',
          headerTitle: '',
          headerShown: false
        }}
        component={Details}
        name="Details"
      />
    </MainStack.Navigator>
  );
};

export default MainStackRoute;
