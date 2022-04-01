import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../screens/';

const MainStack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};

export default RootStackScreen;
